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

let color = {
    pref: 'spref',
    recovery: 'srecovery',
    speed: 'sspeed',
}

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
            color: color.pref,
        },
        { // pref1
            name:'左回り◯',
            engname:'Left Turns',
            desc:'Become a little better at left counterclockwise track',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: color.pref,
        },
        { // pref2
            name:'春ウマ◯',
            engname:'Spring Girl',
            desc:'Become a little better at races in the Spring',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: color.pref,
        },
        { // pref3
            name:'夏ウマ娘◯',
            engname:'Summer Girl',
            desc:'Become a little better at races in the Summer',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: color.pref,
        },  
        { // pref4
            name:'秋ウマ娘◯',
            engname:'Autumn Girl',
            desc:'Become a little better at races in the Autumn',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: color.pref,
        },
        { // pref5
            name:'冬ウマ娘◯',
            engname:'Winter Girl',
            desc:'Become a little better at races in the Winter',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: color.pref,
        },
        { // pref6
            name:'外枠得意◯',
            engname:'Outer Gate Affinity',
            desc:'Become a little better at races when starting at gate 6-8',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: color.pref,
        },
        { // pref7
            name:'おひとり様◯',
            engname:'The One',
            desc:'Showing off your ability becomes a little easier when no other girls share your strategy',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: color.pref,
        },
        { // pref8
            name:'伏兵◯',
            engname:'Underdog',
            desc:'Become a little better at showing off your ability when 4th favorite or below',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: color.pref,
        },
        { // pref9
            name:'シンパシー',
            engname:'Sympathy',
            desc:'Increases ability a little if there are many girls with Sympathetic Heart',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: color.pref,
        },
        { // pref10
            name:'一匹狼',
            engname:'Lone Wolf',
            desc:'Raises your abilities a little if you\'re the only girl with Lone Wolf\'s Heart',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref5icon.png',
            color: color.pref,
        },
        { // pref11
            name:'東京レース場◯',
            engname:'Tokyo Racetrack',
            desc:'Become a little better at Tokyo Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: color.pref,
        },
        { // pref12
            name:'中山レース場◯',
            engname:'Nakayama Racetrack',
            desc:'Become a little better at Nakayama Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: color.pref,
        },
        { // pref13
            name:'阪神レース場◯',
            engname:'Hanshin Racetrack',
            desc:'Become a little better at Hanshin Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: color.pref,
        },
        { // pref14
            name:'京都レース場◯',
            engname:'Kyoto Racetrack',
            desc:'Become a little better at Kyoto Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: color.pref,
        },
        { // pref15
            name:'中京レース場◯',
            engname:'Chukyo Racetrack',
            desc:'Become a little better at Chukyo Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: color.pref,
        },
        { // pref16
            name:'札幌レース場◯',
            engname:'Sapporo Racetrack',
            desc:'Become a little better at Sapporo Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: color.pref,
        },
        { // pref17
            name:'函館レース場◯',
            engname:'Hakodate Racetrack',
            desc:'Become a little better at Hakodate Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: color.pref,
        },
        { // pref18
            name:'福島レース場◯',
            engname:'Fukushima Racetrack',
            desc:'Become a little better at Fukushima Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: color.pref,
        },
        { // pref19
            name:'新潟レース場◯',
            engname:'Niigata Racetrack',
            desc:'Become a little better at Niigata Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: color.pref,
        },
        { // pref20
            name:'小倉レース場◯',
            engname:'Kokura Racetrack',
            desc:'Become a little better at Ogura Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: color.pref,
        },
        { // pref21
            name:'根幹距離◯',
            engname:'Core Distance',
            desc:'Become a little better at Core Distances (Multiples of 400m)',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: color.pref,
        },
        { // pref22
            name:'非根幹距離◯',
            engname:'Non-Core Distances',
            desc:'Become a little better at Non-Core Distances (Not Multiples of 400m)',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: color.pref,
        },
        { // pref23
            name:'大井レース場◯',
            engname:'Ooi Racetrack',
            desc:'Become a little better at Ooi Racetrack',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref3icon.png',
            color: color.pref,
        },
        { // pref24
            name:'良バ場◯',
            engname:'Track Condition (Good)',
            desc:'Become a little better on tracks in Good condition',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref1icon.png',
            color: color.pref,
        },
        { // pref25
            name:'道悪◯',
            engname:'Wicked Path',
            desc:'Become a little better on Slightly Poor, Poor, and Bad condition tracks',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref1icon.png',
            color: color.pref,
        },
        { // pref26
            name:'対抗意識◯',
            engname:'Competitive Spirit',
            desc:'Become a little better at showing off your ability when at least 6 other girls share your strategy',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref1icon.png',
            color: color.pref,
        },
        { // pref27
            name:'晴れの日◯',
            engname:'Sunny Days',
            desc:'Become a little better at races on Sunny Days',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref2icon.png',
            color: color.pref,
        },
        { // pref28
            name:'曇りの日◯',
            engname:'Cloudy Days',
            desc:'Become a little better at races on a Cloudy Day',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref2icon.png',
            color: color.pref,
        },
        { // pref29
            name:'雨の日◯',
            engname:'Rainy Day',
            desc:'Become a little better at races on a Rainy Day',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref2icon.png',
            color: color.pref,
        },
        { // pref30
            name:'雪の日◯',
            engname:'Snowy Days',
            desc:'Become a little better at races on Snowy Days',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref2icon.png',
            color: color.pref,
        },
        { // pref31
            name:'徹底マーク◯',
            engname:'Eyes On You',
            desc:'Become a little better at showing off your ability when sharing a strategy with the crowd favorite',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref2icon.png',
            color: color.pref,
        },
        { // pref32
            name:'内枠得意◯',
            engname:'Inner Gate Affinity',
            desc:'Become a little better at races when starting at gate 1-3',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref6icon.png',
            color: color.pref,
        },
        { // pref33
            name:'逃げのコツ◯',
            engname:'Runner\'s Tricks',
            desc:'Taking a good position becomes a little easier',
            tags: [
                tags.Escape,
            ],
            icon: 'pref6icon.png',
            color: color.pref,
        },
        { // pref34
            name:'先行のコツ◯',
            engname:'Leaders Tricks',
            desc:'Taking a good position becomes a little easier',
            tags: [
                tags.Leader,
            ],
            icon: 'pref6icon.png',
            color: color.pref,
        },
        { // pref35
            name:'差しのコツ◯',
            engname:'Betweener\'s Tricks',
            desc:'Taking a good position becomes a little easier',
            tags: [
                tags.Betweener,
            ],
            icon: 'pref6icon.png',
            color: color.pref,
        },
        { // pref36
            name:'追込のコツ◯',
            engname:'Chasers Tricks',
            desc:'Taking a good position becomes a little easier',
            tags: [
                tags.Chaser,
            ],
            icon: 'pref6icon.png',
            color: color.pref,
        },
        { // pref36
            name:'ラッキーセブン',
            engname:'Lucky Seven',
            desc:'A little good thing may happen if your starting gate is 7',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref4icon.png',
            color: color.pref,
        },
        { // pref36
            name:'スーパーラッキーセブン',
            engname:'Super Lucky Seven',
            desc:'Good things may happen if your starting gate is 7',
            tags: [
                tags.Everyone,
            ],
            icon: 'pref4iconrare.webp',
            color: color.pref,
        },
    ],
    recovery:[
        { // rec0
            name:'コーナー回復◯',
            engname:'Corner Recovery',
            desc:'Slightly recover stamina through efficient cornering',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec1
            name:'直線回復',
            engname:'Straight Recovery',
            desc:'Slightly recover stamina on straights',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec2
            name:'隠れ蓑',
            engname:'Undercover',
            desc:'Remain composed and slightly recover stamina in Opening Leg if front-side is crowded',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec3
            name:'ペースキープ',
            engname:'Keep the Pace',
            desc:'Slightly recover stamina when passed in the Middle Leg',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec4
            name:'ウマ込み冷静',
            engname:'Crowded Calm',
            desc:'Slightly recover stamina when boxed in during the Middle Leg',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec5
            name:'スタミナキープ',
            engname:'Stamina Keep',
            desc:'Slightly harder to tire out during the Opening Leg',
            tags: [
                tags.Leader,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec6
            name:'好位追走',
            engname:'Favorite Place',
            desc:'Become slightly harder to tire during the Middle Leg',
            tags: [
                tags.Leader,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec7
            name:'後方待機',
            engname:'On Standby',
            desc:'Become slightly harder to tire out during the Middle Leg',
            tags: [
                tags.Chaser,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec8
            name:'様子見',
            engname:'Wait and See',
            desc:'Slightly harder to tire when in the back during the Middle Leg',
            tags: [
                tags.Short,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec9
            name:'展開窺い',
            engname:'Progress Peek',
            desc:'Become slightly harder to tire when in the back of the pack during the Opening Leg',
            tags: [
                tags.Miles,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec10
            name:'前途洋々',
            engname:'Bright Future',
            desc:'Become slightly harder to tire out when in the lead during the Middle Leg',
            tags: [
                tags.Medium,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec11
            name:'前途洋々',
            engname:'Bright Future',
            desc:'Become slightly harder to tire out when in the lead during the Middle Leg',
            tags: [
                tags.Medium,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec12
            name:'深呼吸',
            engname:'Deep Breaths',
            desc:'Take a breath when entering straights and become slightly harder to tire out',
            tags: [
                tags.Long,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec13
            name:'別腹タンク',
            engname:'Backup Belly',
            desc:'Slightly recovers running willpower after exhausting your strength',
            tags: [
                tags.Long,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec14
            name:'軽やかステップ',
            engname:'Light Step',
            desc:'Become slightly harder to tire out from left-right movements',
            tags: [
                tags.Medium,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec15
            name:'パス上手',
            engname:'Pass Expert',
            desc:'Become slightly harder to tire when passing',
            tags: [
                tags.Long,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec16
            name:'勢い任せ',
            engname:'Leave it to vigour!',
            desc:'Become slightly harder to tire out on uphills',
            tags: [
                tags.Escape,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec17
            name:'栄養補給',
            engname:'Nutritional Supplements',
            desc:'Slightly recover stamina in Middle Leg',
            tags: [
                tags.Leader,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec18
            name:'小休憩',
            engname:'A Little Break',
            desc:'Slightly recover stamina during the Opening Leg',
            tags: [
                tags.Betweener,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec19
            name:'下校の楽しみ',
            engname:'Winding Down',
            desc:'Become slightly harder to tire out on downhills',
            tags: [
                tags.Chaser,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec20
            name:'冷静',
            engname:'Serene',
            desc:'When front is crowded, slightly calm down remain composed',
            tags: [
                tags.Chaser,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec21
            name:'スリーセブン',
            engname:'Triple 7s',
            desc:'Slightly improve mood when the remaining distance is 777m',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec22
            name:'ふり絞り',
            engname:'Shake It Out',
            desc:'Slightly recover stamina if many skills activate during the Final Leg',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryicon.png',
            color: color.recovery,
        },
        { // rec23
            name:'円弧のマエストロ',
            engname:'Arc Maestro',
            desc:'Recover stamina through efficient cornering',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec24
            name:'好転一息',
            engname:'Breath of Fresh Air',
            desc:'Recover stamina on straights',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec25
            name:'鋼の意志',
            engname:'Will of Steel',
            desc:'Remain composed and recover stamina in Opening Leg if front-side is crowded',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec26
            name:'不屈の心',
            engname:'Indomitable Heart',
            desc:'Recover stamina when passed in the Middle Leg',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec27
            name:'どこ吹く風',
            engname:'Where the Wind Blows',
            desc:'Recover stamina when boxed in during the Middle Leg',
            tags: [
                tags.Everyone,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec28
            name:'余裕綽々',
            engname:'Calm and Composed',
            desc:'Harder to tire out during the Opening Leg',
            tags: [
                tags.Leader,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec29
            name:'レースプランナー',
            engname:'Race Planner',
            desc:'Harder to tire during the Middle Leg',
            tags: [
                tags.Leader,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec30
            name:'眠れる獅子',
            engname:'Sleeping Lion',
            desc:'Become harder to tire out during the Middle Leg',
            tags: [
                tags.Chaser,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec31
            name:'慧眼',
            engname:'Wisdom Eye',
            desc:'Become harder to tire when in the back of the pack during the Opening Le',
            tags: [
                tags.Miles,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec32
            name:'切り開く者',
            engname:'The One Who Clears The Path',
            desc:'Become harder to tire out when in the lead during the Middle Leg',
            tags: [
                tags.Medium,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec33
            name:'クールダウン',
            engname:'Cooldown',
            desc:'Take a breath when entering straights and become harder to tire out',
            tags: [
                tags.Long,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec34
            name:'火事場のバ鹿力',
            engname:'Fight or Flight',
            desc:'Recover the will to run after exhausting your strength',
            tags: [
                tags.Long,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec35
            name:'神業ステップ',
            engname:'Miracle Step',
            desc:'Become harder to tire out from left-right movements',
            tags: [
                tags.Medium,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec36
            name:'じゃじゃウマ娘',
            engname:'Wild Girl',
            desc:'Become harder to tire out on uphills',
            tags: [
                tags.Escape,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec37
            name:'食いしん坊',
            engname:'Big Eater',
            desc:'Recover stamina in Middle Leg',
            tags: [
                tags.Leader,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec38
            name:'リラックス',
            engname:'Relax',
            desc:'Recover stamina in Opening Leg',
            tags: [
                tags.Betweener,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec39
            name:'下校後のスペシャリスト',
            engname:'After School Specialist',
            desc:'Become harder to tire out on downhills',
            tags: [
                tags.Chaser,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
        { // rec40
            name:'冷静沈着',
            engname:'Calm and Collected',
            desc:'When front is crowded, calm down and remain composed',
            tags: [
                tags.Chaser,
            ],
            icon: 'recoveryiconrare.png',
            color: color.recovery,
        },
    ],
    speed: [
        { // spd0
            name:'遊びはおしまいっ！',
            engname:'Playtime\'s Over!',
            desc:'Slightly increase speed when a girl has been following you for a while',
            tags: [
                tags.Everyone,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd1
            name:'スリップストリーム',
            engname:'Slipstream',
            desc:'When following right behind a girl, become slightly less affected by wind resistance',
            tags: [
                tags.Everyone,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd2
            name:'尻尾上がり',
            engname:'Hold Your Tail High',
            desc:'Slightly increase speed if many skills were activated during the Middle Leg',
            tags: [
                tags.Everyone,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd3
            name:'ウマ好み',
            engname:'Big Fan',
            desc:'Slightly increase speed when many girls are nearby',
            tags: [
                tags.Everyone,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd4
            name:'追込コーナー◯',
            engname:'Chaser\'s Corner',
            desc:'Slightly increase speed on corners',
            tags: [
                tags.Chaser,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd5
            name:'追込直線◯',
            engname:'Chaser\'s Straights',
            desc:'Slightly increases speed on straights',
            tags: [
                tags.Chaser,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd6
            name:'十万バリキ',
            engname:'100K Horsepower',
            desc:'Slightly increases speed on uphills',
            tags: [
                tags.Betweener,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd7
            name:'差しコーナー◯',
            engname:'Betweener\'s Corner',
            desc:'Slightly increases speed on corners',
            tags: [
                tags.Betweener,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd8
            name:'差し直線◯',
            engname:'Betweener\'s Straights',
            desc:'Slightly increases speed on straights',
            tags: [
                tags.Betweener,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd9
            name:'先行コーナー◯',
            engname:'Leader\'s Corner',
            desc:'Slightly increases speed on corners',
            tags: [
                tags.Leader,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd10
            name:'先行直線◯',
            engname:'Leader\'s Straights',
            desc:'Slightly increases speed on straights',
            tags: [
                tags.Leader,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd11
            name:'先頭プライド',
            engname:'Lead Pride',
            desc:'Become slightly harder to pass in the Opening Leg',
            tags: [
                tags.Escape,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd12
            name:'逃げコーナー◯',
            engname:'Runner\'s Corner',
            desc:'Slightly increases speed on corners',
            tags: [
                tags.Escape,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd13
            name:'逃げ直線◯',
            engname:'Runner\'s Straight',
            desc:'Slightly increases speed on straights',
            tags: [
                tags.Escape,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd14
            name:'追い上げ',
            engname:'Press the Attack',
            desc:'Slightly increases speed when passing in the Final Leg',
            tags: [
                tags.Long,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd15
            name:'リードキープ',
            engname:'Keep the Lead',
            desc:'Slightly easier to keep the lead if you lead with big margin in the Middle Leg',
            tags: [
                tags.Long,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd16
            name:'長距離コーナー◯',
            engname:'Long Distance Corner',
            desc:'Slightly increases speed on corners',
            tags: [
                tags.Long,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd17
            name:'長距離直線◯',
            engname:'Long Distance Straight',
            desc:'Slightly increases speed on straights',
            tags: [
                tags.Long,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd18
            name:'中距離コーナー◯',
            engname:'Medium Distance Corner',
            desc:'Slightly increases speed on corners',
            tags: [
                tags.Medium,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd19
            name:'中距離直線◯',
            engname:'Medium Distance Straights',
            desc:'Slightly increases speed on straights',
            tags: [
                tags.Medium,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd20
            name:'負けん気',
            engname:'Rival Spirit',
            desc:'Passing becomes slightly easier to succeed',
            tags: [
                tags.Miles,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd21
            name:'ギアシフト',
            engname:'Shift Gears',
            desc:'Passing becomes slightly easier if you\'re in front in Middle Leg',
            tags: [
                tags.Miles,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd22
            name:'マイルコーナー◯',
            engname:'Mile Corner',
            desc:'Slightly increases speed on corners',
            tags: [
                tags.Miles,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd23
            name:'マイル直線◯',
            engname:'Mile Straights',
            desc:'Slightly increases speed on straights',
            tags: [
                tags.Miles,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd24
            name:'大きなリード',
            engname:'Big Lead',
            desc:'Slightly easier to keep the lead if you lead with big margin in the Middle Leg',
            tags: [
                tags.Short,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd25
            name:'短距離コーナー◯',
            engname:'Short Distance Corners',
            desc:'Slightly increases speed on corners',
            tags: [
                tags.Short,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd26
            name:'短距離直線◯',
            engname:'Short Distance Straights',
            desc:'Slightly increases speed on straights',
            tags: [
                tags.Short,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd27
            name:'内弁慶',
            engname:'King of the Castle',
            desc:'Slightly increases speed when near the inner fence during the Final Leg',
            tags: [
                tags.Long,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd28
            name:'食い下がり',
            engname:'Stand Your Ground',
            desc:'When overtaken in the Final Leg, retaking your place becomes slightly easier',
            tags: [
                tags.Medium,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd29
            name:'テンポアップ',
            engname:'Uptempo',
            desc:'Slightly easier to take a good position during the Middle Leg if you\'re leading',
            tags: [
                tags.Medium,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd30
            name:'積極策',
            engname:'Positive Planning',
            desc:'When in the lead in Opening Leg, extending the lead becomes a little easier',
            tags: [
                tags.Miles,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd31
            name:'詰め寄り',
            engname:'Draw Forward',
            desc:'Spurts become slightly easier when in the back of the pack during the Final Leg',
            tags: [
                tags.Short,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd32
            name:'仕掛け抜群',
            engname:'Master Trickster',
            desc:'Get ready to pass during the Final Leg and become slightly better at positioning',
            tags: [
                tags.Chaser,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd33
            name:'外差し準備',
            engname:'Outside Pass, Ready!',
            desc:'Slightly increases speed when passing from the outside on the final corner',
            tags: [
                tags.Betweener,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd34
            name:'位置取り押し上げ',
            engname:'Position Swiper',
            desc:'Slightly increases speed during the Middle Leg',
            tags: [
                tags.Betweener,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd35
            name:'抜け出し準備',
            engname:'Passing Preparations',
            desc:'Passing becomes slightly easier on the Final corner',
            tags: [
                tags.Leader,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd36
            name:'急ぎ足',
            engname:'Fast Paced',
            desc:'Going forwards during the Middle Leg becomes slightly easier',
            tags: [
                tags.Escape,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd37
            name:'末脚',
            engname:'Last Leg',
            desc:'Slightly increases speed at the Last Spurt',
            tags: [
                tags.Everyone,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd38
            name:'ペースアップ',
            engname:'Up The Pace',
            desc:'Slightly increases speed when passing during the Middle Leg',
            tags: [
                tags.Everyone,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd39
            name:'直線巧者',
            engname:'Straight Skill',
            desc:'Slightly increases speed on straights',
            tags: [
                tags.Everyone,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd40
            name:'コーナー巧者◯',
            engname:'Clever Cornerer',
            desc:'Become better at corners, slightly increased speed',
            tags: [
                tags.Everyone,
            ],
            icon: 'speedicon.png',
            color: color.speed,
        },
        { // spd41
            name:'百万バリキ',
            engname:'1M Horsepower',
            desc:'Increases speed on uphills',
            tags: [
                tags.Betweener,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd42
            name:'怒涛の追い上げ',
            engname:'Tempestuous Pressure',
            desc:'Increases speed when passing in the Final Leg',
            tags: [
                tags.Long,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd43
            name:'先陣の心得',
            engname:'Vanguard\'s Wisdom',
            desc:'Easier to keep the lead if you lead with big margin in the Middle Leg',
            tags: [
                tags.Long,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd44
            name:'姉御肌',
            engname:'Big Sister Disposition',
            desc:'Passing becomes easier to succeed',
            tags: [
                tags.Miles,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd45
            name:'ギアチェンジ',
            engname:'Gear Change',
            desc:'Passing becomes easier if you\'re in front in Middle Leg',
            tags: [
                tags.Miles,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd46
            name:'圧倒的リード',
            engname:'Overwhelming Lead',
            desc:'Easier to keep the lead if you lead with big margin in the Middle Leg',
            tags: [
                tags.Short,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd47
            name:'内的体験',
            engname:'Intrinsic Experience',
            desc:'Increases speed when near the inner fence during the Final Leg',
            tags: [
                tags.Long,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd48
            name:'勝利への執念',
            engname:'To Victory!',
            desc:'When overtaken in the Final Leg, retaking your place becomes easier',
            tags: [
                tags.Medium,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd49
            name:'キラーチューン',
            engname:'Killer Tune',
            desc:'Easier to take a good position in the Middle Leg if you\'re leading',
            tags: [
                tags.Medium,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd50
            name:'マイルの支配者',
            engname:'Ruler of Mile',
            desc:'When in the lead in Opening Leg, extending the lead becomes easier',
            tags: [
                tags.Miles,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd51
            name:'電撃の煌めき',
            engname:'Glimmer of Shock',
            desc:'Spurts become easier when in the back of the pack during the Final Leg',
            tags: [
                tags.Short,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd52
            name:'疾風怒濤',
            engname:'Storm and Stress',
            desc:'Get ready to pass during the Final Leg and become better at positioning',
            tags: [
                tags.Chaser,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd53
            name:'昇り龍',
            engname:'Rising Dragon',
            desc:'Increases speed when passing from the outside on the final corner',
            tags: [
                tags.Betweener,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd54
            name:'迅速果断',
            engname:'Fortune Favors the Fast',
            desc:'Increases speed during the Middle Leg',
            tags: [
                tags.Betweener,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd55
            name:'スピードスター',
            engname:'Speed Star',
            desc:'Passing becomes easier on the Final corner',
            tags: [
                tags.Leader,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd56
            name:'脱出術',
            engname:'Escape Artist',
            desc:'Going forwards during the Middle Leg becomes easier',
            tags: [
                tags.Escape,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd57
            name:'全身全霊',
            engname:'Heart and Soul',
            desc:'Increase Speed during your Last Spurt',
            tags: [
                tags.Everyone,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd58
            name:'アガッてきた！',
            engname:'Now I\'m Pumped!',
            desc:'Increases speed when passing during the Middle Leg',
            tags: [
                tags.Everyone,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd59
            name:'ハヤテ一文字',
            engname:'Like The Wind',
            desc:'Increases speed on straights',
            tags: [
                tags.Everyone,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
        { // spd60
            name:'弧線のプロフェッサー',
            engname:'Archline Professor',
            desc:'Become better at corners, increases speed',
            tags: [
                tags.Everyone,
            ],
            icon: 'speediconrare.webp',
            color: color.speed,
        },
    ],
}
