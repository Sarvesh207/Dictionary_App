// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '27709e8b68msh9a54a06a29fa4f2p162702jsnda7140ff947c',
// 		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
// 	}
// };

// let btn = document.getElementById("searchBtn")
// btn.addEventListener('click', function(e){
// 	e.preventDefault();
// 	let searching = document.getElementById('Searching').innerText = "Searching..."
//     let inputWord = document.getElementById('inp-Word').value;
// 	console.log(inputWord);
// 	fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${inputWord}`, options)
// 	.then( (response) =>{
// 		return response.json()

// 	})
// 	.then((data) => {
// 		console.log(data.list[1])
// 		console.log(data.list[1].definition)
// 		searching.document.getElementById('Searching').style.display = 'none'
// 		let show = document.getElementById('showWord').innerText = `${inputWord}`
// 	})

// })
// https://www.dictionaryapi.com/api/v3/references/learners/json/apple?key=your-api-key
// fetch('https://dictionaryapi.com/api/v3/references/learners/json/test?key=3006fcd1-03bb-4321-852f-67bc8b236160')
fetch(
  "https://dictionaryapi.com/api/v3/references/learners/json/apple?key=3006fcd1-03bb-4321-852f-67bc8b236160"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
// https://www.dictionaryapi.com/api/v3/references/learners/json/apple?key=your-api-key

// .catch(err => console.error(err));
