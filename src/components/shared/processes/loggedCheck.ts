import loggedAPI from "../../../api/actions/LoggedAPI"


const loggedCheck = async () => {
    try {
        await loggedAPI()
    } catch(e) {
        console.log(e)
    }
}

export default loggedCheck