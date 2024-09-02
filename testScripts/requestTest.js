const axios = require("axios");
const timeNow = new Date();

async function harvardReq(searchParam) {
    try {
        const response = await axios.get(`https://api.harvardartmuseums.org/object`, {
            params: {
                classification: 'Paintings|Prints|Photographs',
                keyword: searchParam,
                apikey: '6b920e03-1991-458c-92d8-f75913dce8b8'
            }
        });
        console.log(`[+] - Total Harvard Records : ${response.data.info.totalrecords}`);

        const itemArray = []

        response.data.records.forEach(element => {
            itemArray.push(
            {
                "creditLine": element.creditline,
                "division": element.division,
                "element_id": element.id,
                "classification": element.classification,
                "images": element.images && element.images.length !== 0 ? element.images[0].baseimageurl : null,
                "artist": element.people && element.people.length > 0 ? element.people[0].name : "Unknown"
            })
        });
        console.log(`[+] - Total Harvard Records Converted : ${itemArray.length}`);
        console.log(Object.keys(itemArray[0]))
        
    } catch (error) {
        console.error("Error fetching data from Harvard Art Museums API:", error);
        throw error;
    }
}

async function metReq(searchParam) {
    try {
        const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search`, {
            params: {
                q: searchParam,
            }
        });
        console.log(`[+] - Total MET Records : ${response.data.objectIDs.length}`);
        const metIDs = response.data.objectIDs.slice(0,10)
        console.log(`Subset of Met IDs : ${metIDs.length}`)

        const itemArray = []

        for (let x in metIDs)
        {
            const response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${metIDs[x]}`)
            itemArray.push(
                {
                    "creditLine": response.data.creditLine,
                    "division": response.data.department,
                    "element_id": response.data.objectID,
                    "classification": response.data.objectName,
                    "images": response.data.primaryImage && response.data.primaryImage !== "" ? response.data.primaryImage : null,
                    "artist": response.data.artistDisplayName
                })

            }
            console.log(`[+] - Total Harvard Records Converted : ${itemArray.length}`);
            console.log(Object.keys(itemArray[0]))

    } catch (error) {
        console.error("Error fetching data from Metropolitan Museum of Art API:", error);
        throw error;
    }
}

async function main (searchParam) {
    console.log(`[+] - ${timeNow}`);
    await harvardReq(searchParam)
    console.log("\n")
    await metReq(searchParam)
}


main("sunflower")