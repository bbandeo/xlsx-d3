const { Client } = require('@elastic/elasticsearch')
const esIndex = 'godoy-poviña'
const esHost = 'http://localhost:9200/'
const esClient = new Client({ node: esHost })

let database = []

module.exports.run = async () => {

    await esClient.search({
        index: esIndex,
        body: {
            query: { match_all: {} }
        }
    }).then(data => {
        database = data.body.hits.hits
        console.log(database)
    })
        .catch(err => {
            if (err.message === 'index_not_found_exception') {
                console.log('Elasticsearch Db Index not found...');
            }
            console.trace(err.message)
        })
}


// run().catch(console.log)