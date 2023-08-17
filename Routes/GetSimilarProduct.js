import garmentsArray from "../Data/Items";

const GetsimilarProducts = (req, res) => {
    let body = req.params.belongs
    let filterItems = garmentsArray && garmentsArray.filter((items) => items.belongs === body)
    if (filterItems.length > 0) {
        res.send(filterItems)
    } else {
        res.send(
            {
                message: "item does not match",
                error: "404"
            }
        )

    }
}

export default GetsimilarProducts;