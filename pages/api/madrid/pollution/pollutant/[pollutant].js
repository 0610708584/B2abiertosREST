export default async(req, res) => {
	const {
		method,
		query: {pollutant},
	} = req;

	switch(method) {
		case 'GET':
			try {
				var data = await fetch('https://datos.alcobendas.org/dataset/26b78554-d43c-4f20-af96-78041179980a/resource/51a2fefa-d24b-45ee-820f-e9f3b9a60e15/download/datos-de-contaminacion-por-horas_2022.json')
							           .then(response => response.text())
				var pollutions = JSON.parse(data)

        var pollution = pollutions.filter(function(pollutions) { return pollutions.Contaminante.toLowerCase() == pollutant.toLowerCase()});
				return res.status(200).json(pollution)
			} catch(error) {
				return res.status(400).json({error: error.message})
			}
		default:
			return res.status(400).json({msg: 'This method is not supported.'})
	}
}
