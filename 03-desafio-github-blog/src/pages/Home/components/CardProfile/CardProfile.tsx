import { CardProfilecontainer } from "./styles";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CardProfile(){
    return(
        <CardProfilecontainer>
               <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <div>
                        <h1>nome</h1>
                        <a href="">
                            Github

                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                </div>
        </CardProfilecontainer>
    )
}