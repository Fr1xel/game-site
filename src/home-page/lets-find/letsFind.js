import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../../redux/user";
import "./letsFind.css"

const LetsFind = () => {
    const dispatch = useDispatch()
    const gameList = useSelector(state => state.user.games.gameList)

    useEffect(() => {
            dispatch(fetchGames())
    }, [])
    console.log(gameList)
    return (
        <>
        <section className="mt-lets-find text-light">
            <div className="container">
                <h1>So lets find the perfect game for you!</h1>
            </div>
        </section>
        </>
    )
}

export default LetsFind;