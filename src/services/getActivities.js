export default async function getActivities() {
    try {
        const response = await fetch("http://localhost:4000/api/v1/activities", {
            method: "GET",
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching landrup assets", error);
    }
}