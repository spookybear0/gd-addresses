const searchInput = document.querySelector("#search input");
const articles = document.querySelector("#content");

function convertAddr(str) {
    return str.replace(/%GD/g, "GeometryDash.exe").replace(/%GM/g, "<a href=''>GameManager</a>")
}

function generateFunctionText(ns, addr) {
    if (!addr.args) return "No argument information available";
    let resFunc =   "<t-main>" +
                    addr.callingConvention +
                    "</t-main> <t-third>" +
                    ns.namespace +
                    "</t-third>::<t-sec>" +
                    addr.function +
                    "</t-sec>(";
    let resExpl = "";
    addr.args.forEach(a => {
        switch (a.arg) {
            case "-returnValue":
                resFunc = "<t-fourth>" + a.type + "</t-fourth> " + resFunc;
                resExpl = "<tr><td><t-main>returnValue</t-main></td><td>" + a.type + "</td><td>" + a.desc + "</td></tr>\n" + resExpl;
                break;
            default:
                resFunc += "<t-fourth>" + a.type + "</t-fourth> " + a.arg + ", ";
                resExpl += "<tr><td><t-main>" + a.arg + "</t-main></td><td>" + a.type + "</td><td>" + a.desc + "</td></tr>\n";
        }
    });
    resFunc = resFunc.substr(0, resFunc.length - 2) + ")";

    console.log(resExpl);

    return `
        <text><t-code>${resFunc}</t-code></text>
        <margin-top></margin-top>
        <margin-top></margin-top>
        <table>
            <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
            ${resExpl}
        </table>
    `;
}

function generateFunctionDesc(addr) {
    if (addr.description)
        return `
            <margin-top />
            <text><t-sec>${addr.description}</t-sec></text>
        `;
    else return ``;
}

addresses.forEach((ns, nix) => {
    ns.contents.forEach((add, aix) => {
        const article = document.createElement('article');
        article.innerHTML = `
        <h1>${ns.namespace}::${add.function}</h1>
        <text>${convertAddr(add.address)}</text>
        <section>
            ${generateFunctionText(ns, add)}
            ${generateFunctionDesc(add)}
        </section>
        <a-meta data-meta='${nix}::${aix}'></a-meta>
        `;

        article.addEventListener('click', e => {
            if (article.querySelector('section:hover'))
                return;
            const d = article.querySelector('section');
            if (d.style.display == 'none') {
                d.style.display = 'flex';
                article.classList.add('is-open');
            } else {
                d.style.display = 'none';
                article.classList.remove('is-open');
            }
        });
        article.querySelector('section').style.display = 'none';
    
        articles.append(article);
    });
});

// this definitely needs to be improved, and like, a lot
function searchFunc(data, aix, searchString) {
    let found = 0;
    const keywords = searchString.replace(/\:/g, " ").trim().split(" ");

    // search by literally just turning the data into a json string and checking
    // if that string contains what was searched lmfaoo
    keywords.forEach(s => {
        found += JSON.stringify(data.contents[aix]).toLowerCase().includes(s.toLowerCase())
                || data.namespace.toLowerCase().includes(s.toLowerCase());
    });
    return found == keywords.length;
}

searchInput.addEventListener('input', e => {
    document.querySelectorAll("#content article").forEach(art => {
        const ixs = art.querySelector("a-meta").getAttribute("data-meta").split("::");
        const nix = parseInt(ixs[0]);
        const aix = parseInt(ixs[1]);

        if (searchFunc(addresses[nix], aix, searchInput.value))
            art.style.display = "initial";
        else
            art.style.display = "none";
    });
});

if (feather)
    feather.replace();