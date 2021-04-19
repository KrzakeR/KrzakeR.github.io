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
    recovery:[
        { // rec0
            name:'コーナー回復○',
            engname:'Corner Recovery',
            desc:'Slightly recover stamina through efficient cornering',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec1
            name:'直線回復',
            engname:'Straight Recovery',
            desc:'Slightly recover stamina on straights',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec2
            name:'隠れ蓑',
            engname:'Undercover',
            desc:'Remain composed and slightly recover stamina in Opening Leg if front-side is crowded',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec3
            name:'ペースキープ',
            engname:'Keep the Pace',
            desc:'Slightly recover stamina when passed in the Middle Leg',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec4
            name:'ウマ込み冷静',
            engname:'Crowded Calm',
            desc:'Slightly recover stamina when boxed in during the Middle Leg',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec5
            name:'スタミナキープ',
            engname:'Stamina Keep',
            desc:'Slightly harder to tire out during the Opening Leg',
            tags: [
                tags.Leader,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec6
            name:'好位追走',
            engname:'Favorite Place',
            desc:'Become slightly harder to tire during the Middle Leg',
            tags: [
                tags.Leader,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec7
            name:'後方待機',
            engname:'On Standby',
            desc:'Become slightly harder to tire out during the Middle Leg',
            tags: [
                tags.Chaser,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec8
            name:'様子見',
            engname:'Wait and See',
            desc:'Slightly harder to tire when in the back during the Middle Leg',
            tags: [
                tags.Short,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec9
            name:'展開窺い',
            engname:'Progress Peek',
            desc:'Become slightly harder to tire when in the back of the pack during the Opening Leg',
            tags: [
                tags.Miles,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec10
            name:'前途洋々',
            engname:'Bright Future',
            desc:'Become slightly harder to tire out when in the lead during the Middle Leg',
            tags: [
                tags.Medium,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec11
            name:'前途洋々',
            engname:'Bright Future',
            desc:'Become slightly harder to tire out when in the lead during the Middle Leg',
            tags: [
                tags.Medium,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec12
            name:'深呼吸',
            engname:'Deep Breaths',
            desc:'Take a breath when entering straights and become slightly harder to tire out',
            tags: [
                tags.Long,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec13
            name:'別腹タンク',
            engname:'Backup Belly',
            desc:'Slightly recovers running willpower after exhausting your strength',
            tags: [
                tags.Long,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec14
            name:'軽やかステップ',
            engname:'Light Step',
            desc:'Become slightly harder to tire out from left-right movements',
            tags: [
                tags.Medium,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec15
            name:'パス上手',
            engname:'Pass Expert',
            desc:'Become slightly harder to tire when passing',
            tags: [
                tags.Long,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec16
            name:'勢い任せ',
            engname:'Leave it to vigour!',
            desc:'Become slightly harder to tire out on uphills',
            tags: [
                tags.Escape,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec17
            name:'栄養補給',
            engname:'Nutritional Supplements',
            desc:'Slightly recover stamina in Middle Leg',
            tags: [
                tags.Leader,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec18
            name:'小休憩',
            engname:'A Little Break',
            desc:'Slightly recover stamina during the Opening Leg',
            tags: [
                tags.Betweener,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec19
            name:'下校の楽しみ',
            engname:'Winding Down',
            desc:'Become slightly harder to tire out on downhills',
            tags: [
                tags.Chaser,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec20
            name:'冷静',
            engname:'Serene',
            desc:'When front is crowded, slightly calm down remain composed',
            tags: [
                tags.Chaser,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec21
            name:'スリーセブン',
            engname:'Triple 7s',
            desc:'Slightly improve mood when the remaining distance is 777m',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec22
            name:'ふり絞り',
            engname:'Shake It Out',
            desc:'Slightly recover stamina if many skills activate during the Final Leg',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: 'Speed',
        },
        { // rec23
            name:'円弧のマエストロ',
            engname:'Arc Maestro',
            desc:'Recover stamina through efficient cornering',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec24
            name:'好転一息',
            engname:'Breath of Fresh Air',
            desc:'Recover stamina on straights',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec25
            name:'鋼の意志',
            engname:'Will of Steel',
            desc:'Remain composed and recover stamina in Opening Leg if front-side is crowded',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec26
            name:'不屈の心',
            engname:'Indomitable Heart',
            desc:'Recover stamina when passed in the Middle Leg',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec27
            name:'どこ吹く風',
            engname:'Where the Wind Blows',
            desc:'Recover stamina when boxed in during the Middle Leg',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec28
            name:'余裕綽々',
            engname:'Calm and Composed',
            desc:'Harder to tire out during the Opening Leg',
            tags: [
                tags.Leader,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec29
            name:'レースプランナー',
            engname:'Race Planner',
            desc:'Harder to tire during the Middle Leg',
            tags: [
                tags.Leader,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec30
            name:'眠れる獅子',
            engname:'Sleeping Lion',
            desc:'Become harder to tire out during the Middle Leg',
            tags: [
                tags.Chaser,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec31
            name:'慧眼',
            engname:'Wisdom Eye',
            desc:'Become harder to tire when in the back of the pack during the Opening Le',
            tags: [
                tags.Miles,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec32
            name:'切り開く者',
            engname:'The One Who Clears The Path',
            desc:'Become harder to tire out when in the lead during the Middle Leg',
            tags: [
                tags.Medium,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec33
            name:'クールダウン',
            engname:'Cooldown',
            desc:'Take a breath when entering straights and become harder to tire out',
            tags: [
                tags.Long,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec33
            name:'火事場のバ鹿力',
            engname:'Fight or Flight',
            desc:'Recover the will to run after exhausting your strength',
            tags: [
                tags.Long,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec33
            name:'神業ステップ',
            engname:'Miracle Step',
            desc:'Become harder to tire out from left-right movements',
            tags: [
                tags.Medium,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec33
            name:'じゃじゃウマ娘',
            engname:'Wild Girl',
            desc:'Become harder to tire out on uphills',
            tags: [
                tags.Escape,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec33
            name:'食いしん坊',
            engname:'Big Eater',
            desc:'Recover stamina in Middle Leg',
            tags: [
                tags.Leader,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec33
            name:'リラックス',
            engname:'Relax',
            desc:'Recover stamina in Opening Leg',
            tags: [
                tags.Betweener,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec33
            name:'下校後のスペシャリスト',
            engname:'After School Specialist',
            desc:'Become harder to tire out on downhills',
            tags: [
                tags.Chaser,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
        { // rec33
            name:'冷静沈着',
            engname:'Calm and Collected',
            desc:'When front is crowded, calm down and remain composed',
            tags: [
                tags.Chaser,
            ],
            icon: 'recoveryiconrare.png',
            color: 'Speed',
        },
    ]
}
