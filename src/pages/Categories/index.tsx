import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetFightingGameQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'
import ProductsList from '../../components/ProductsList'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: fightingGames } = useGetFightingGameQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()

  if (
    actionGames &&
    sportGames &&
    fightingGames &&
    rpgGames &&
    simulationGames
  ) {
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

  return <h4>Carregando...</h4>
}

export default Categories
