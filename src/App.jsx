import { useState, useEffect } from 'react'
import DisplayCards from './displayCards.jsx'
import './App.css'

const App = () => {
    const [people, setPeople] = useState([])
    const [list, setList] = useState([])
    const [searchVal, setSearchVal] = useState("")

    useEffect(() => {
        fetch('http://acnhapi.com/v1/villagers/')
        .then(res => res.json())
        .then(rdata => {
            rdata = Object.values(rdata)
            setPeople(rdata)
            setList(people.map((person, i) => {
                return (
                    <div key={i} className="villagerCard">
                        <img className="villagerPic" src={person.image_uri} alt="villager"/>
                        <h3>{person.name['name-USen']}</h3>
                        <p>{person.species}</p>
                        <p>{person.birthday}</p>
                        <p>{person.personality}</p>
                        <p>"{person.saying}"</p>
                    </div>
                )
            }))
        })
        .catch(err => console.log(err))
        search()
    }, [people])

    const search = () => {
        let newPeople = people.filter(person => person.name['name-USen'].toLowerCase().includes(searchVal.toLowerCase()))
        setList(newPeople.map((newPerson, i) => {
            return (
                <div key={i} className="villagerCard">
                    <img className="villagerPic" src={newPerson.image_uri} alt="villager"/>
                    <h3>{newPerson.name['name-USen']}</h3>
                    <p>{newPerson.species}</p>
                    <p>{newPerson.birthday}</p>
                    <p>{newPerson.personality}</p>
                    <p>"{newPerson.saying}"</p>
                </div>
            )
        }))
    }

    return (
        <main>
            <input 
                type="text" 
                onChange={e => setSearchVal(e.target.value)}
            />
            <div className="villagerBox">
                <DisplayCards list={list}/>
            </div>
        </main>
    )
}
export default App