export default async(req, res) => {
	const {
		method,
		query: {date},
	} = req;

	switch(method) {
		case 'GET':
			try {
				var data = await fetch('https://datos.alcobendas.org/dataset/083e08c7-1647-4bb1-a64b-957d3604f346/resource/9f58d5b2-9d2d-4a1c-91eb-c9c34b2b7614/download/recurso.json')
							           .then(response => response.text())
				var weather = JSON.parse(data.substring(1))

        var record = (weather.records).find(el => (el.fecha == date))
				return res.status(200).json(record)
			} catch(error) {
				return res.status(400).json({error: error.message})
			}
		default:
			return res.status(400).json({msg: 'This method is not supported.'})
	}
}
