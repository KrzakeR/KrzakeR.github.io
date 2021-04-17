let tags = {
    Everyone: '<span class="tknowledge">Dla każdego</span>',
    Escape: '<span class="tspeed">Ucieczka</span>',
    Leader: '<span class="tspeed">Leader</span>',
    Betweener: '<span class="tspeed">Betweener</span>',
    Chaser: '<span class="tspeed">Chaser</span>',
    Short: '<span class="tstamina">Krótki</span>',
    Miles: '<span class="tstamina">Mile</span>',
    Medium: '<span class="tstamina">Średni</span>',
    Long: '<span class="tstamina">Długi</span>',
}



// ◯

let skill_db = {
    pref: [
        { // pref0
            name:'右回り◯',
            engname:'Right Turns',
            desc:'Become a little better at clockwise tracks',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: 'Knowledge',
        },
        { // pref1
            name:'左回り◯',
            engname:'Left Turns',
            desc:'Become a little better at left counterclockwise track',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: 'Knowledge',
        },
        { // pref2
            name:'春ウマ◯',
            engname:'Spring Girl',
            desc:'Become a little better at races in the Spring',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: 'Knowledge',
        },
        { // pref3
            name:'夏ウマ娘◯',
            engname:'Summer Girl',
            desc:'Become a little better at races in the Summer',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: 'Knowledge',
        },  
        { // pref4
            name:'秋ウマ娘◯',
            engname:'Autumn Girl',
            desc:'Become a little better at races in the Autumn',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: 'Knowledge',
        },
        { // pref5
            name:'冬ウマ娘◯',
            engname:'Winter Girl',
            desc:'Become a little better at races in the Winter',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: 'Knowledge',
        },
        { // pref6
            name:'外枠得意◯',
            engname:'Outer Gate Affinity',
            desc:'Become a little better at races when starting at gate 6-8',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: 'Knowledge',
        },
        { // pref7
            name:'おひとり様◯',
            engname:'The One',
            desc:'Showing off your ability becomes a little easier when no other girls share your strategy',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: 'Knowledge',
        },
        { // pref8
            name:'伏兵◯',
            engname:'Underdog',
            desc:'Become a little better at showing off your ability when 4th favorite or below',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: 'Knowledge',
        },
        { // pref9
            name:'シンパシー',
            engname:'Sympathy',
            desc:'Increases ability a little if there are many girls with Sympathetic Heart',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: 'Knowledge',
        },
        { // pref10
            name:'一匹狼',
            engname:'Lone Wolf',
            desc:'Raises your abilities a little if you\'re the only girl with Lone Wolf\'s Heart',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: 'Knowledge',
        },
        { // pref11
            name:'東京レース場◯',
            engname:'Tokyo Racetrack',
            desc:'Become a little better at Tokyo Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: 'Knowledge',
        },
        { // pref12
            name:'中山レース場◯',
            engname:'Nakayama Racetrack',
            desc:'Become a little better at Nakayama Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: 'Knowledge',
        },
        { // pref13
            name:'阪神レース場◯',
            engname:'Hanshin Racetrack',
            desc:'Become a little better at Hanshin Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: 'Knowledge',
        },
        { // pref14
            name:'京都レース場◯',
            engname:'Kyoto Racetrack',
            desc:'Become a little better at Kyoto Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: 'Knowledge',
        },
        { // pref15
            name:'中京レース場◯',
            engname:'Chukyo Racetrack',
            desc:'Become a little better at Chukyo Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: 'Knowledge',
        },
        { // pref16
            name:'札幌レース場◯',
            engname:'Sapporo Racetrack',
            desc:'Become a little better at Sapporo Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: 'Knowledge',
        },
        { // pref17
            name:'函館レース場◯',
            engname:'Hakodate Racetrack',
            desc:'Become a little better at Hakodate Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: 'Knowledge',
        },
        { // pref18
            name:'福島レース場◯',
            engname:'Fukushima Racetrack',
            desc:'Become a little better at Fukushima Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: 'Knowledge',
        },
        { // pref19
            name:'新潟レース場◯',
            engname:'Niigata Racetrack',
            desc:'Become a little better at Niigata Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: 'Knowledge',
        },
        { // pref20
            name:'小倉レース場◯',
            engname:'Kokura Racetrack',
            desc:'Become a little better at Ogura Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: 'Knowledge',
        },
        { // pref21
            name:'根幹距離◯',
            engname:'Core Distance',
            desc:'Become a little better at Core Distances (Multiples of 400m)',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: 'Knowledge',
        },
        { // pref22
            name:'非根幹距離◯',
            engname:'Non-Core Distances',
            desc:'Become a little better at Non-Core Distances (Not Multiples of 400m)',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: 'Knowledge',
        },
        { // pref23
            name:'大井レース場◯',
            engname:'Ooi Racetrack',
            desc:'Become a little better at Ooi Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: 'Knowledge',
        },
        { // pref24
            name:'良バ場◯',
            engname:'Track Condition (Good)',
            desc:'Become a little better on tracks in Good condition',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref1icon.png',
            color: 'Knowledge',
        },
        { // pref25
            name:'道悪◯',
            engname:'Wicked Path',
            desc:'Become a little better on Slightly Poor, Poor, and Bad condition tracks',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref1icon.png',
            color: 'Knowledge',
        },
        { // pref26
            name:'対抗意識◯',
            engname:'Competitive Spirit',
            desc:'Become a little better at showing off your ability when at least 6 other girls share your strategy',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref1icon.png',
            color: 'Knowledge',
        },
        { // pref27
            name:'晴れの日◯',
            engname:'Sunny Days',
            desc:'Become a little better at races on Sunny Days',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref2icon.png',
            color: 'Knowledge',
        },
        { // pref28
            name:'曇りの日◯',
            engname:'Cloudy Days',
            desc:'Become a little better at races on a Cloudy Day',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref2icon.png',
            color: 'Knowledge',
        },
        { // pref29
            name:'雨の日◯',
            engname:'Rainy Day',
            desc:'Become a little better at races on a Rainy Day',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref2icon.png',
            color: 'Knowledge',
        },
        { // pref30
            name:'雪の日◯',
            engname:'Snowy Days',
            desc:'Become a little better at races on Snowy Days',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref2icon.png',
            color: 'Knowledge',
        },
        { // pref31
            name:'徹底マーク◯',
            engname:'Eyes On You',
            desc:'Become a little better at showing off your ability when sharing a strategy with the crowd favorite',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref2icon.png',
            color: 'Knowledge',
        },
        { // pref32
            name:'内枠得意◯',
            engname:'Inner Gate Affinity',
            desc:'Become a little better at races when starting at gate 1-3',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref6icon.png',
            color: 'Knowledge',
        },
        { // pref33
            name:'逃げのコツ◯',
            engname:'Runner\'s Tricks',
            desc:'Taking a good position becomes a little easier',
            tags: [
                tags.Escape,
            ],
            icon: 'pref6icon.png',
            color: 'Knowledge',
        },
        { // pref34
            name:'先行のコツ◯',
            engname:'Leaders Tricks',
            desc:'Taking a good position becomes a little easier',
            tags: [
                tags.Leader,
            ],
            icon: 'pref6icon.png',
            color: 'Knowledge',
        },
        { // pref35
            name:'差しのコツ◯',
            engname:'Betweener\'s Tricks',
            desc:'Taking a good position becomes a little easier',
            tags: [
                tags.Betweener,
            ],
            icon: 'pref6icon.png',
            color: 'Knowledge',
        },
        { // pref36
            name:'追込のコツ◯',
            engname:'Chasers Tricks',
            desc:'Taking a good position becomes a little easier',
            tags: [
                tags.Chaser,
            ],
            icon: 'pref6icon.png',
            color: 'Knowledge',
        },
        { // pref36
            name:'ラッキーセブン',
            engname:'Lucky Seven',
            desc:'A little good thing may happen if your starting gate is 7',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref4icon.png',
            color: 'Knowledge',
        },
        { // pref36
            name:'スーパーラッキーセブン',
            engname:'Super Lucky Seven',
            desc:'Good things may happen if your starting gate is 7',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref4iconrare.webp',
            color: 'Knowledge',
        },
    ],
}
