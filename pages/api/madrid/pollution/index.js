export default async function handler(req, res) {
	const {method} = req

	switch(method) {
		case 'GET':
			try {
				var data = await fetch('https://datos.alcobendas.org/dataset/69d432a7-29f8-4f6f-b7d0-5f9a4f8fb014/resource/93cc5f85-c80e-49d8-9bc4-11c07b5f846f/download/datos-mensuales-de-contaminacion-atmosferica-2000-2017.json')
							           .then(response => response.text())
				var pollutions = JSON.parse(data)
				return res.status(200).json(pollutions)
			} catch(error) {
				return res.status(400).json({error: error.message})
			}
		default:
			return res.status(400).json({msg: 'This method is not supported.'})
	}
}