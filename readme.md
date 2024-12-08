<h1>Purpose and Description</h1> 
In my daily routine of submitting resumes on LinkedIn, I’ve encountered frustrations with job posts that lead to third-party sites, jobs ads, or irrelevant listings from companies that don't match my interests. </br></br>
Unfortunately, LinkedIn’s job search page lacks a filter to exclude specific companies.
To address this, I created a small Chrome extension designed to filter out unwanted companies from the job search results. This extension is currently for personal use and is not listed on the Chrome Web Store, but it’s functional and easy to enable for individual use. </br></br>

<h1>Steps to Enable the Filter</h1> 
<ol> 
    <li>Clone the repository to your local directory.</li>
    <li>Navigate to the target directory and execute dependency installment with  <code>npm install</code> and build using <code>npm run build</code>.</li> 
    <li>Once the build is complete, open Chrome and go to <code>chrome://extensions</code>.</li> 
    <li>Enable "Developer mode" in the top-right corner of the page.</li> 
    <li>Click on <code>Load unpacked</code> in the top-left menu and select the generated <code>build</code> folder.</li>
    <li>The extension will be added to Chrome. At this point, the extension is defaulted to be turn on and ready.</li> 
    <li>For convenience, you can pin the extension to your browser toolbar. A default list of companies to filter out is included, but you can customize it by adding or removing companies directly through the extension’s settings.</li>
    <li> If you delete a company from the filter list, a page refresh or navigating to a different page is required for the changes to take effect. This is because the filter operates by directly removing the corresponding elements from the DOM. However, adding a company to the filter list takes effect immediately, and you should see the associated job posts removed in real-time. </li> 
    <li>Additionally, the filter interacts directly with the company name displayed on the job post and is case-sensitive. Ensure the company names in your filter list match exactly as they appear to avoid discrepancies.</li>
    <li>No further actions are required. The filter will automatically execute whenever you perform a job search on LinkedIn.</li> </ol>