/* Não desistir de implementar o JSON- Server */
import axios from "axios";

export async function getProjects() {
    return await axios.get("http://localhost:3000/projects?_limit=10")
                        .then(response => {
                            return response.data
                        })
}