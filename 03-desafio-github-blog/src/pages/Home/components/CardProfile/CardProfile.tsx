import { CardProfilecontainer, ContentProfile, LinkProfile } from "./styles";
import { useContext, useEffect } from "react";
import { GithubContext } from "../../../../contexts/GithubContext";


import { faArrowUpRightFromSquare, faUserGroup, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function CardProfile() {

    const { dataProfile } = useContext(GithubContext)


    useEffect(() => {

    }, [])

    return (
        <CardProfilecontainer>
            <img src={dataProfile.avatar} alt="" />

            <ContentProfile>
                <div className="display-flex">
                    <h1 className="title">{dataProfile.name}</h1>
                    <a href={dataProfile.url} target="_blank">
                        Github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>

                <p className="flex-1">{dataProfile.description}</p>

                <LinkProfile>
                    <p>
                        <FontAwesomeIcon icon={faGithub} />
                        {dataProfile.username}
                    </p>

                    <p>
                        <FontAwesomeIcon icon={faLocationDot} />
                        {dataProfile.location || ''}
                    </p>

                    <p>
                        <FontAwesomeIcon icon={faUserGroup} />
                        {dataProfile.followers} seguidores
                    </p>
                </LinkProfile>
            </ContentProfile>

        </CardProfilecontainer>
    )
}