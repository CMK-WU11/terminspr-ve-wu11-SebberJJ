export async function getActivities() {
    try {
        const response = await fetch("http://localhost:4000/api/v1/activities", {
            method: "GET",
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching landrup activities", error);
    }
}

export async function getInstuctorActivities(instructorId) {
    try {
        const response = await fetch("http://localhost:4000/api/v1/activities", {
            method: "GET",
        });
        const data = await response.json();
        
        const filteredData = data.filter((item) => item.instructorId === instructorId);

        console.log("instructor data:", filteredData);
        return filteredData;
    } catch (error) {
        console.error("Error fetching landrup instructor aktiviteter", error);
    }
}
