const Database = require ('./db')
const createProffy = require ('./createProffy')

Database.then( async(db) =>{
    // Inserir dados

    proffyValue ={
        name: "Rafael Rufino",
        avatar: "https://scontent.fnat10-1.fna.fbcdn.net/v/t1.0-1/p160x160/107738734_3028137827312498_1482817804595466080_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=JeOgTM5eljAAX9hCh5u&_nc_ht=scontent.fnat10-1.fna&_nc_tp=6&oh=6fa9618d9ff19edea534b96be3b3557d&oe=5F543506",
        whatsapp: "89987654534",
        bio: "Entusiasta das melhores tecnologias de desenvolvimento de software, Apaixonado por expandir sua mente atraves de conhecimento  sobre desenvolvinto no intuido de mudar a vida das pessoas e facilitar as tarefas do dia a dia através de suas experiências.",
    }
    
    classValue = {
        subject: 1,
        cost: "56",
        // o proffy id virá pelo banco de dado
    }

    
    classScheduleValues =[
        // class_id vira pelo banco de dados
            {
                weekday: 1,
                time_from: 720,
                time_to: 1220
            },

            {
                weekday: 0,
                time_from: 520,
                time_to: 1220
            }
        ]
    
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados Inseridos


    // todos os proffys

  const selectedProffys = await db.all("SELECT * FROM proffys")
//    console.log(selectedProffys)


// ajeitar essa parte 


  // consultar as classes de um determinado professor
  // e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id  = 1;

  `)
//   console.log(selectClassesAndProffys) //ate aqui não consigo pegar whatsapp

// o horario que a pessoa trabalha, por exemplo, é das 8h - 18h
// o horario do time_from (8h) precisa ser menor ou igual ao horario solicitado
// o time_to precisa acima

const selectClassesSchedules =await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"

    `)
    // console.log(selectClassesSchedules)

})