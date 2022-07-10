let restaurants

export default class RestaurantsDAO {
    static async injectDB(conn) {
        if (restaurant) {
            return
        }
        try {
            restaurants = await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants")
        } catch (e) {
            console.error(`Unable to establish a connection handle in restaurantsDAO: ${e}`,)
        }
    }
}