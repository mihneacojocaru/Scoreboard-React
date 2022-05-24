import React, {useEffect} from 'react'

const Stats = ({players}) => {

    const totalPoints= players.reduce((total,player)=>{
        return total+player.points;
    },0);

    useEffect(() => {
      //console.log(players)
    }, [])
    

    const playerNumbers = players.length;


  return (
    <div className='app-header__stats'>
        <span>Players: {playerNumbers}</span>
        <span>Total Points: {totalPoints}</span>
    </div>
  )
}

export default Stats;