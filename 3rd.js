function  bestTeam( player1, player2 ) 
{
    if(typeof player1!=="object"||typeof player2!=='object')
    {
        return "Invalid";
    }
      const first_team_foul=player1.foul;
      const first_team_cardy=player1.cardY;
      const first_team_cardR=player1.cardR;
      const first_team_total=first_team_foul+first_team_cardy+first_team_cardR;
      const second_team_foul=player2.foul;
      const second_team_cardy=player2.cardY;
      const second_team_cardR=player2.cardR;
      const second_team_total=second_team_foul+second_team_cardy+second_team_cardR;
    if(first_team_total>second_team_total)
    {
        return player2.name;
    }
    else if(first_team_total<second_team_total)
    {
        return player1.name;
    }
    else if(first_team_total===second_team_total)
    {
        return 'Tie'
    }
   

}

const team=bestTeam(
{ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
{ name: "France", foul: 10, cardY: 2, cardR: 1 }
);
console.log(team);


   
