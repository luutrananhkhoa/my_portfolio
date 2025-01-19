import {Cake, Dna, Globe2} from "lucide-react"

const Aboutfooter = () => {
    const items = [
        {name:"Age", answer:"English UK", icon:<Cake className="h-11 w-11" />},
        {name:"Nationality",answer:"Vietnam", icon:<Globe2   className="h-8 w-8" />},
        {name:"Gender",answer:"Male", icon:<Dna  className="h-8 w-8" />},
    ]
    return(
        <>
        {
          items.map((val, indx) => {
              return(
                <div className="p-1 w-fit relative" key={indx}>
                  <h1 className="gap-2 text-3xl font-poppins text-primary-text font-semibold relative flex icon_underline max-sm:text-2xl">{val.icon}{val.name}</h1>
                  <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary-text pt-3 max-lg:justify-start">
                    {val.answer}
                  </div>
              </div>
              )
            })
          }
        </>
    )
}

export default Aboutfooter