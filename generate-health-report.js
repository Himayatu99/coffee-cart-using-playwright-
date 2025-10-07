const fs = require('fs');

const resultsFile = 'test-results.json';
if (!fs.existsSync(resultsFile)) {
  console.error('❌ test-results.json not found. Run your tests first.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(resultsFile, 'utf8'));

let total = 0;
let passed = 0;
let failed = 0;
let flaky = 0;
let skipped = 0;
let totalDuration = 0;

// Recursive function to extract tests from nested suites
function extractTests(suite) {
  if (!suite) return;
  if (suite.specs) {
    suite.specs.forEach(spec => {
      spec.tests.forEach(test => {
        total++;
        totalDuration += test.results?.[0]?.duration || 0;

        if (test.outcome === 'expected') passed++;
        else if (test.outcome === 'flaky') flaky++;
        else if (test.outcome === 'skipped') skipped++;
        else failed++;
      });
    });
  }

  if (suite.suites) suite.suites.forEach(subSuite => extractTests(subSuite));
}

data.suites?.forEach(suite => extractTests(suite));

const passRate = total > 0 ? ((passed / total) * 100).toFixed(2) : 0;
const avgDuration = total > 0 ? (totalDuration / total / 1000).toFixed(2) : 0;

// --- Generate Automation Health Report ---
const report = `
🔍 Automation Health Check Report
----------------------------------
📅 Date: ${new Date().toLocaleString()}
🧪 Total Tests: ${total}
✅ Passed: ${passed}
❌ Failed: ${failed}
⚠️ Flaky: ${flaky}
⚪ Skipped: ${skipped}
📊 Pass Rate: ${passRate}%
⏱️ Avg Duration: ${avgDuration}s
`;

fs.writeFileSync('automation-health-report.txt', report);
console.log('✅ Health report generated: automation-health-report.txt');

// --- Update Trend CSV ---
const csvFile = 'automation-trend.csv';
const csvHeader = 'Date,Total,Passed,Failed,Flaky,Skipped,PassRate(%),AvgDuration(s)\n';
const csvRow = `${new Date().toISOString()},${total},${passed},${failed},${flaky},${skipped},${passRate},${avgDuration}\n`;

if (!fs.existsSync(csvFile)) {
  fs.writeFileSync(csvFile, csvHeader);
}
fs.appendFileSync(csvFile, csvRow);

console.log('📈 Trend data updated: automation-trend.csv');
