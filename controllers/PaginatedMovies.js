const Pagination = require("../models/paginationSchema");

const PaginatedMovies = async (req, res) => {
    const Page = parseInt(req.query.page);
    const Limit = parseInt(req.query.limit);
    
    const startIndex = (Page - 1) * Limit;
    const lastIndex = (Page) * Limit;

    const movies = await Pagination.find({});

    let results = {};
    results.totalmovies = movies.length;
    results.pageCount = Math.ceil(movies.length / Limit);

    if (lastIndex < movies.length) {
        results.next = {
            page:Page+1,
        }
    }

    if (startIndex > 0) {
        results.prev = {
            page:Page-1,
        }
    }
    results.result = await movies.slice(startIndex, lastIndex);
    res.status(200).json(results);
}

module.exports = PaginatedMovies;