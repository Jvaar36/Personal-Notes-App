const setButton = document.getElementById("btn1")
setButton.addEventListener('click', () => {

    document.getElementById("main").innerHTML = "This is a notes app, to gather personal notes into an app, that can contain up to 50 notes.<br/><br/>" + 
                                                    "Enter a note, load all notes onto screen, refresh all notes, change the color theme of the app, and trash all notes."


})

const setButton2 = document.getElementById("btn2")
setButton2.addEventListener('click', () => {

    let check1 = document.getElementById("confirm").style.visibility

    if (check1 != "visible") {

    document.getElementById("input").style.visibility = "visible"

    }

})


const setButtonL = document.getElementById("btn3")
setButtonL.addEventListener('click', () => {

    let notes = JSON.parse(window.localStorage.getItem("notes") || "[]")

    if (notes[0].index != 0) {        

    let disp = ""

        let size = notes.length

        let c = 0

        for (l = 0; l < size; l++) {

            if (notes[l].hide == "no") {

                c++

            }

        }

        if (c == 0) {

            document.getElementById("main").innerHTML = "-- All notes hidden."

        }

        else {


        for (x = 0; x < size; x++) {

            let array = [notes[x].index, notes[x].note, notes[x].hide]

            let index = array[0]

            let note = array[1]

            let hide = array[2]

            let i = x
        
        if (hide == "no") {

    disp += "<div class='brdr'><form><input type='hidden' id='"+i+"' value='"+i+"'>Note number: " + index + "<br/><br/>Note: " + note + "<br/><br/><button id='nmbr"+i+"' class='hidebtn'>Hide</button></form><br/><br/></div><br/>"

        }

    }

    document.getElementById("main").innerHTML = disp

    for (let i in notes) {

        if (notes[i].hide == "no") {

        document.getElementById("nmbr"+i).addEventListener('click', val)

            function val() {

                let x = i

            window.indexi = x

            formHide()

            }
        
        }

    }

}

}

else {

    document.getElementById("main").innerHTML = "-- No notes recorded."

}

function formHide() {

    let i = document.getElementById(indexi).value
    
    let notes2 = JSON.parse(window.localStorage.getItem("notes") || "[]")
    
    let index = notes2[i].index
        
        let note = notes2[i].note
    
        let hide = "yes"
        
        let arvo = i
    
        let arr = {index, note, hide}
        
            notes2.splice(arvo, 1, arr)
    
            window.localStorage.setItem("notes", JSON.stringify(notes2))
    
            document.getElementById("main").innerHTML = "-- Note " + index + " hidden."


        }

})



    document.getElementById("formInput").addEventListener('submit', function(event) {

        event.preventDefault()


    let notes = JSON.parse(window.localStorage.getItem("notes") || "[]")

    let note = document.getElementById("notearea").value

    let size = notes.length

    if (size > 49) {

        document.getElementById("input").style.visibility = "hidden"

        document.getElementById("main").innerHTML = "-- Maximum notes exceeded."

    }

    else {

    let index = ""

        for (x = 0; x < size; x++) {

            let array = [notes[x].index]

            index = array[0]

        }

        if (index == 0) {

            index++

            hide = "no"

            let arr = [{index:index, note:note, hide:hide}]

            window.localStorage.setItem("notes", JSON.stringify(arr))

        }

        else if (index >= 1) {

            index++

            let hide = "no"

            let arr = notes
            
            let arr2 = [{index:index, note:note, hide:hide}]

            let save = arr.concat(arr2)

            window.localStorage.setItem("notes", JSON.stringify(save))


        }

    document.getElementById("main").innerHTML = "-- Note saved."
    document.getElementById("notearea").value = ""
    document.getElementById("input").style.visibility = "hidden"

    }

})





const setButtonC = document.getElementById("btnC")
setButtonC.addEventListener('click', () => {

    let check2 = document.getElementById("input").style.visibility

    if (check2 != "visible") {

    document.getElementById("confirm").style.visibility = "visible"

    }

})

const setButtonCan = document.getElementById("btnCan")
setButtonCan.addEventListener('click', () => {

    document.getElementById("confirm").style.visibility = "hidden"

})

const setButtonD = document.getElementById("btnD")
setButtonD.addEventListener('click', () => {


        let index = 0

        let note = "default"

        let hide = "-"

        let array = [{index:index, note:note, hide:hide}]


        window.localStorage.setItem("notes", JSON.stringify(array))

        document.getElementById("confirm").style.visibility = "hidden"

        document.getElementById("main").innerHTML = "-- All records deleted."

})

const setButton6 = document.getElementById("btn6")
setButton6.addEventListener('click', () => {

    let notes = JSON.parse(window.localStorage.getItem("notes") || "[]")

    let size = notes.length

    for (x = 0; x < size; x++) {

        if (notes[x].hide == "yes") {

        let index = notes[x].index
        
        let note = notes[x].note
    
        let hide = "no"
        
        let arvo = x
    
        let arr = {index, note, hide}
        
            notes.splice(arvo, 1, arr)
    
            window.localStorage.setItem("notes", JSON.stringify(notes))

        }

    }

    document.getElementById("main").innerHTML = "-- All notes restored."

})




let theme = "dark"

const setButtonT = document.getElementById("btn4")
setButtonT.addEventListener('click', () => {

    if (theme == 'dark') {

        document.getElementById("main").style.background = "linear-gradient(#aaaaaa, #aaaaff)";
        document.body.style.background = "#cccccc";
        document.body.style.color = "#111111";

        theme = "light";

    }

    else if (theme == 'light') {

        document.getElementById("main").style.background = "linear-gradient(#000000, #222222)";
        document.body.style.background = "#111111";
        document.body.style.color = "#aaaaaa";

        theme = "dark";

    }

})

const soundi = document.getElementById("klik")

    document.getElementById("btn1").addEventListener('mouseover', () => {
  
          soundi.play()
  
      })

      document.getElementById("btn2").addEventListener('mouseover', () => {
  
        soundi.play()

    })

    document.getElementById("btn3").addEventListener('mouseover', () => {
  
        soundi.play()

    })

    document.getElementById("btn4").addEventListener('mouseover', () => {
  
        soundi.play()

    })

    document.getElementById("btnI").addEventListener('mouseover', () => {
  
        soundi.play()

    })

    document.getElementById("btnCan").addEventListener('mouseover', () => {
  
        soundi.play()

    })

    document.getElementById("btn6").addEventListener('mouseover', () => {
  
        soundi.play()

    })

    document.getElementById("btnC").addEventListener('mouseover', () => {
  
        soundi.play()

    })

    document.getElementById("btnD").addEventListener('mouseover', () => {
  
        soundi.play()

    })