import { topTrendingItems } from "../Data/Items"

const GetToptrendingPRoducts = (req, res) => {
    let body = req.params.category

    let filterItems = topTrendingItems && topTrendingItems.filter((items) => items.belongs === body)
    if (filterItems.length > 0) {
        res.send(filterItems)
    } else {
        res.send(
            {
                message: "data not found",
                error: "404"
            }
        )

    }
}

export default GetToptrendingPRoducts;