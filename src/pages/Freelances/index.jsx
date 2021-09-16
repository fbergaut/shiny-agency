// import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { useFetch, useTheme } from '../../utils/hooks'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

// function Freelances() {
//   const [freelancersList, setfreelancersList] = useState([])
//   const [isDataLoading, setDataLoading] = useState(false)
  // const [error, setError] = useState(false)

  // useEffect(() => {
  //   async function fetchFreelances() {
  //     setDataLoading(true)
  //     try {
  //       const response = await fetch(`http://localhost:8000/freelances`)
  //       const { freelancersList } = await response.json()
  //       setFreelancesList(freelancersList)
  //     } catch (err) {
  //       console.log('===== error =====', err)
  //       setError(true)
  //     } finally {
  //       setDataLoading(false)
  //     }
  //   }
  //   fetchFreelances()
  // }, [])

  // if (error) {
  //   return <span>Oups il y a eu un problème</span>
//   // }

//   useEffect(() => {
//     setDataLoading(true)
//     fetch(`http://localhost:8000/freelances`).then((response) =>
//       response
//         .json()
//         .then(({ freelancersList }) => {
//           setfreelancersList(freelancersList)
//           setDataLoading(false)
//         })
//         .catch((error) => console.log(error))
//     )
//   }, [])

//   return (
//     <div>
//       <PageTitle>Trouvez votre prestataire</PageTitle>
//       <PageSubtitle>
//         Chez Shiny nous réunissons les meilleurs profils pour vous.
//       </PageSubtitle>
//       {isDataLoading ? (
//       <LoaderWrapper>
//           <Loader />
//       </LoaderWrapper>) : (
//       <CardsContainer>
//         {freelancersList.map((profile, index) => (
//           <Card
//             key={`${profile.name}-${index}`}
//             label={profile.job}
//             title={profile.name}
//             picture={profile.picture}
//           />
//         ))}
//       </CardsContainer>
//       )}
//     </div>
//   )
// }

function Freelances() {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  )

  // Ici le "?" permet de s'assurer que data existe bien.
  // Vous pouvez en apprendre davantage sur cette notation ici :
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  const freelancersList = data?.freelancersList

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances
