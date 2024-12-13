const defaultCompanies =[
    "Aurigne Consulting",
    "SynergisticIT",
    "Jobs via Dice",
    "Havensight Consulting Group",
    "CACI International Inc",
    "Infosys",
    "Glint Tech Solutions",
    "WayUp",
    "Outlier",
    "Tata Consultancy Services",
]


chrome.storage.sync.get(['blockedCompanies'], (result) => {
    if(result.blockedCompanies == null)
        chrome.storage.sync.set({"blockedCompanies": defaultCompanies})
})

chrome.storage.onChanged.addListener((changes, namespace) => {
    if(namespace == 'sync' && changes.blockedCompanies)
        filterJobs()
})

function filterJobs() {
    const jobs = document.querySelectorAll("#main > div > div.scaffold-layout__list-detail-inner.scaffold-layout__list-detail-inner--grow > div.scaffold-layout__list > div > ul > li");
     
    chrome.storage.sync.get(["blockedCompanies"], (result) => {
        const blockedCompanies = result.blockedCompanies || []
        console.log(blockedCompanies)
        jobs.forEach(job => {
            const companyNameElement = job.querySelector('.artdeco-entity-lockup__subtitle');
            const companyName = companyNameElement ? companyNameElement.textContent.trim() : '';
            if (blockedCompanies.includes(companyName)) {
                job.remove();
            }
        });
    })
}

function startJobFilter() {

    const waitForJobs = setInterval(() => {
        const jobs = document.querySelectorAll("#main > div > div.scaffold-layout__list-detail-inner.scaffold-layout__list-detail-inner--grow > div.scaffold-layout__list > div > ul > li");
        if (jobs.length > 0) {
            clearInterval(waitForJobs);
            filterJobs();
            const observer = new MutationObserver(() => {
                filterJobs();
            });
            const targetNode = document.querySelector("#main > div > div.scaffold-layout__list-detail-inner.scaffold-layout__list-detail-inner--grow > div.scaffold-layout__list > div > ul");
            if (targetNode) 
                observer.observe(targetNode, { childList: true, subtree: true });
        }
    }, 3000);
}

startJobFilter();