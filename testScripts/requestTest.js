const axios = require("axios");
const timeNow = new Date();
const hours = timeNow.getHours().toString().padStart(2, '0');
const minutes = timeNow.getMinutes().toString().padStart(2, '0');
const seconds = timeNow.getSeconds().toString().padStart(2, '0');
const milliseconds = timeNow.getMilliseconds().toString().padStart(3, '0');

const formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;

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

        for (let x in itemArray)
        {
            console.log(itemArray[x])
        }

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

            console.log(itemArray[x])

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

main("Sunflower")

async function main2 () {
    try{
        console.log(`[${formattedTime}] - Request Initiated`)
        const response = await axios.get("https://8kbydqr7ig.execute-api.eu-west-2.amazonaws.com/Development/test_item")
        console.log(`[${formattedTime}] - Response Recieved`)
        let count = 0
        while (count <= 10)
        {
            console.log(response.data[count])
            count++
        }
    }
    catch (error)
    {
        console.error(`Error Fetching API : ${error.message}`)
    }
}

//  main2()