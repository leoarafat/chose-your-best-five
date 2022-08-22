function getElementById(getElementId, isTrue) {
    let elementId = document.getElementById(getElementId);
    let elementContent;

    if (isTrue === true) {
        elementContent = parseInt(elementId.value);
    } else {
        elementContent == parseInt(elementId.innerText)
    }
    elementId = elementContent;
    return elementContent;
}



function playerAdded() {

    let playerAddList = document.getElementById("player-table");
    playerAddList.innerHTML = "";

    for (i = 0; i < playerDetails.length; i++) {
        let addPlayerName = playerDetails[i].playerName;
        let addSelectBtn = playerDetails[i].selectBtn;


        if (i != 5) {
            let playerList = document.createElement("tr");
            playerList.innerHTML = `
            <td>${i + 1}</td>
            <td>${addPlayerName}</td>
        `;
            playerAddList.appendChild(playerList);

            addSelectBtn.setAttribute("disabled", true)


            document.getElementById("per-player-clculate-btn").addEventListener("click", function() {
                // let perPlayer = document.getElementById("per-player")
                // let perPlayerPrice = parseInt(perPlayer.value);
                let perPlayer = getElementById("per-player", true);
                let clculatePerPlayerPrice = perPlayer * i;
                //let clculatePerPlayerPrice = perPlayerPrice *  i;

                // display player expenses
                let playerExpenses = document.getElementById("player-expenses");
                let playerExpensesPrice = parseInt(playerExpenses.innerText);
                playerExpenses.innerText = clculatePerPlayerPrice.toFixed(2);

                // Calculate Total
                document.getElementById("calculate-total").addEventListener("click", function() {

                    // Manager
                    let manager = getElementById("manager", true)
                    // let manager = document.getElementById("manager");
                    // let managerPrice = parseInt(manager.value);

                    // Coach
                    coach = getElementById("manager", true)
                    // let coach = document.getElementById("coach");
                    // let coachPrice = parseInt(coach.value);

                    let managerCoachTotal = manager + coach


                    // Total expenses
                    let totalExpenses = playerExpensesPrice + managerCoachTotal;

                    // display total price
                    let total = document.getElementById("total");
                    total.innerText = totalExpenses.toFixed(2)
                })

            })

        } else {
            alert("Your Alreay Added 5 Players");
            return
        }
    }
}


let playerDetails = [];

function selectPlayers(element) {
    let playerName = element.parentNode.children[0].innerText;
    let selectBtn = element.parentNode.children[2];
    //console.log(selectBtn)
    let playerObj = {
        playerName: playerName,
        selectBtn: selectBtn
    }

    playerDetails.push(playerObj);

    let setPlayerList = playerAdded(playerDetails);

}