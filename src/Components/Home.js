import { useGlobalContext } from './context'

const Home = () => {
    // const name=useContext(AppContext);
    // for global
    const name=useGlobalContext();
  return (
    <> 
    <div>
        My Home Page
    </div>
    <p>
        {name}
    </p>
    </>
  )
}

export default Home
