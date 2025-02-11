export default async function getActivity(id) {
    try {
        const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`, {
            method: "GET",
        });
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching landrup asset", error);
    }
}