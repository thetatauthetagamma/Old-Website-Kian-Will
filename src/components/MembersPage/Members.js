import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../../css/members.scss';
import { LinkedListNode, Profile } from '../../components/utils.js'

export default function Members() {
    const fadeIn = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config: {duration: 750}
    });

    const [founders, setFounders] = useState(new Set());
    const [userNodes, setUserNodes] = useState({});

    const getLineageData=()=>{
      fetch('./profile.json'
      ,{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          let tempFounders = new Set()
          let tempUserNodes = {}

          for (let index in myJson) {
            let entry = myJson[index];
            if (entry["biguserid"] == "") {
              let currUserId = entry["userid"];
              let currUserNode = new LinkedListNode(entry, null, currUserId);
              tempFounders.add(currUserId);
              tempUserNodes[currUserId] = currUserNode;
              continue;
            }

            let bigUserId = entry["biguserid"];
            let littleUserId = entry["userid"];

            let currBigNode = tempUserNodes[bigUserId];
            if (currBigNode === undefined) {
              currBigNode = new LinkedListNode(null, null, bigUserId);
              tempUserNodes[bigUserId] = currBigNode;
            }

            let currLittleNode = new LinkedListNode(null, null, littleUserId);
            currLittleNode.prevNode = currBigNode;
            tempUserNodes[bigUserId] = currBigNode;
            currBigNode.addNextNode(currLittleNode);
          }
          console.log(tempFounders);
          console.log(tempUserNodes);
          setFounders(tempFounders);
          setUserNodes(tempUserNodes);
        });
    }

    useEffect(() => {
      getLineageData();
    }, []);

    const displayData=()=>{
      // TODO: Figure out how to display data with map
    }

    return(
        <React.Fragment>
            <animated.div className="container" style={fadeIn}>
                <div>
                    <h1 className="header" style={{textAlign: "center"}}>Members</h1>

                    <p className="content-text">
                        When you ask someone why they joined Theta Tau, you'll probably get a diverse
                        set of answers. Some join because they seek professional growth. Others join
                        to meet more engineers in their major and across disciplines. Some are attracted
                        to networking opportunities, or have heard that Theta Tau is the oldest and
                        largest Professional Engineering Fraternity in the country.
                    </p>

                    <p className="content-text">
                        However, when you ask someone why they stayed, and continue to participate in
                        the Fraternity, you'll likely ever hear one answer. <b>It's the people</b>.
                        Among all other things, it's the people, their values and their culture that
                        make your college experience, and what you will remember years after you graduate.
                        And this is especially true with Theta Gamma Chapter, which is made of some of
                        the most diverse and extraordinary engineers you will ever meet. These people
                        are going places.
                    </p>
                </div>

            </animated.div>

            <div>


            </div>
        </React.Fragment>
    )
}
