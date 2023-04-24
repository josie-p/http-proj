const BASE_URL = "https://api.adviceslip.com/advice";

export const getCatCodeAPI = async ( statusCode ) => {
    try{
        const response = await fetch(`${BASE_URL}`, {
            method: "GET", 
            headers: {
                "Content-Type" : "application/json",
            }
        });

        const result = await response.json();

        console.log(result, "result from the advice api!");

        return result;
    }catch(error){
        console.error(error);
        throw error;
    }
}