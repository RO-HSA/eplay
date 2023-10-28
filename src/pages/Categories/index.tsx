import { useEffect, useState } from 'react'

import { Game } from '../Home'
import ProductsList from '../../components/ProductsList'

import diablo from '../../assets/images/diablo.png'
import resident from '../../assets/images/resident.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const Categories = () => {
  const [actionGames, setActionGames] = useState<Game[]>([])
  const [sportGames, setSportGames] = useState<Game[]>([])
  const [simulationGames, setSimulationGames] = useState<Game[]>([])
  const [fightingGames, setFightingGames] = useState<Game[]>([])
  const [rpgGames, setRpgGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setActionGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setSportGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimulationGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setFightingGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpgGames(res))
  }, [])

  return (
    <>
      <ProductsList games={actionGames} title="Ação" background="black" />
      <ProductsList games={sportGames} title="Esportes" background="gray" />
      <ProductsList games={fightingGames} title="Luta" background="black" />
      <ProductsList games={rpgGames} title="RPG" background="gray" />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories
