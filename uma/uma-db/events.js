stats = {
    Speed: '<span class="tspeed">Speed',
    Stamina: '<span class="tstamina">Stamina',
    Power: '<span class="tpower">Power',
    Guts: '<span class="tguts">Guts',
    Knowledge: '<span class="tknowledge">Knowledge',
    Humor: {
        up: '<span class="thumor">Humor ▲',
        down: '<span class="twarning">Humor ▼',
    },
    Trait: '<span class="ttrait">',
    Energy: '<span class="tenergy">Energy',
    Maxenergy: '<span class="tenergy">Max Energy',
    Skillpoints: '<span class="tskillpoints">Skillpoints',
    Relation: {
        up: '<span class="trelation">Relacje ▲',
        down: '<span class="twarning">Relacje ▼',
    },
    Skill: {
        tag: '<span class="tskill">',
        up: ' ▲'
    },
    Friend: {
        unlock: '<span class="tfriend">Odblokowanie przyjaciela',
        fail: '<span class="twarning">Zablokowanie przyjaciela!',
    },
    Heal: '<span class="thumor">Uleczenie',
    Random: '<span class="trandom">Losowa',
    Event: {
        unlock: '<span class="tfriend">Następne wydarzenie',
        fail: '<span class="twarning">Zablokowanie wydarzeń!',
    },
    Chance: {
        tag: '<div class="tchance">Szansa na:',
        end: '</div>'
    },
}

placeholder = [
    [
        {
            name: ' ¯&#92_(ツ)_/¯',
            choices: [
                {
                    name: 'Whoops! Jeszcze nie uzupełnione :)',
                    reward: [
                        stats.Skill.tag + '[Lenistwo]' + stats.Skill.up,
                    ],
                },
            ],
        },
    ],
]

let event_db = [
    [ // 0
        {
            name: '幕開けの予感',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Speed + ' +5',
                    ],
                },
            ],
        },
        {
            name: '一時の幕間',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Speed + ' +5',
                        stats.Knowledge + ' +5',
                    ],
                },
            ],
        },
        {
            name: '伝説のひと幕',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Speed + ' +5',
                        stats.Skill.tag + '[一陣の風]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ボクの武器',
            choices: [
                {
                    name: '全部できるとかっこいいよ！',
                    reward: [
                        stats.Humor.up,
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ]
                },
                {
                    name: '今も十分すごい武器を持ってるよ',
                    reward: [
                        stats.Skill.tag + '[先行直線◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ボクのやり方',
            choices: [
                {
                    name: '自分に合う方法が1番！',
                    reward: [
                        stats.Humor.up,
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ]
                },
                {
                    name: '我慢した後に走ったらもっと気持ちいいよ',
                    reward: [
                        stats.Guts + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 1
        {
            name: 'できたてはごろり、たっぷりと',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Stamina + ' +5',
                    ],
                },
            ],
        },
        {
            name: '煮込んでとろり、優しい味に',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Power + ' +5',
                    ],
                },
            ],
        },
        {
            name: 'おかわりどうぞ、いいこたち！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +10',
                        stats.Power + ' +5',
                        stats.Skill.tag + '[円弧のマエストロ]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'お気遣いもお任せ♪',
            choices: [
                {
                    name: '更にエールを送る',
                    reward: [
                        stats.Skill.tag + '[深呼吸]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'ドリンクを差し入れる',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Stamina + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'お手伝いもお任せ♪',
            choices: [
                {
                    name: 'トレーニングのコツを教えて',
                    reward: [
                        stats.Energy + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '一緒にトレーニングしない？',
                    reward: [
                        stats.Stamina + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 2
        {
            name: '理事長秘書のたづなさん',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Humor.up,
                        stats.Skillpoints + ' +16',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'お疲れ様です♪',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Humor.up,
                        stats.Speed + ' +3',
                        stats.Relation.up
                    ],
                },
            ],
        },
        {
            name: '情熱のふたり',
            choices: [
                {
                    name: 'お話もっと聞きたいです！',
                    reward: [
                        stats.Energy + ' +11',
                        stats.Knowledge + ' +5',
                        stats.Humor.up,
                        stats.Relation.up,
                        stats.Friend.unlock,
                    ],
                },
                {
                    name: 'では、仕事があるのでそろそろ…',
                    reward: [
                        stats.Humor.down,
                        stats.Skillpoints + ' +16',
                        stats.Relation.down,
                        stats.Skill.tag + '[展開窺い]' + stats.Skill.up,
                        stats.Friend.fail,
                    ],
                },
            ],
        },
        {
            name: '牛乳ときどきリンゴ（1 Wycieczka）',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +27',
                        stats.Speed + ' +5',
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '驚異の逃げ脚？（2 Wycieczka）',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +27',
                        stats.Relation.up,
                        stats.Heal,
                    ],
                },
            ],
        },
        {
            name: 'キネマの思ひ出（3 Wycieczka）',
            choices: [
                {
                    name: '『200億の女～キケンな専業主婦～』',
                    reward: [
                        stats.Energy + ' +35',
                        stats.Stamina + ' +5',
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '『白球ひと筋、空へ――熱血野球部物語！』',
                    reward: [
                        stats.Stamina + ' +12',
                        stats.Guts + ' +12',
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ため息と絆創膏（4 Wycieczka）',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +38',
                        stats.Knowledge + ' +5',
                        stats.Humor.up,
                        stats.Relation.up,
                        stats.Heal,
                    ],
                },
            ],
        },
        {
            name: 'ひと休みサプライズ（5 Wycieczka）',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +38',
                        stats.Skillpoints + ' +33',
                        stats.Humor.up,
                        stats.Relation.up,
                        '<br />',
                        stats.Skill.tag + '[集中力]' + stats.Skill.up,
                        'lub',
                        stats.Skill.tag + '[コンセントレーション]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'たづなとの絆・憧れを託して',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +49',
                        stats.Speed + ' +16',
                        stats.Humor.up,
                        stats.Relation.up,
                        stats.Skill.tag + '[尻尾上がり]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '選んだ生き方',
            choices: [
                {
                    name: '理事長室までひとっ走りしますよ！',
                    reward: [
                        stats.Energy + ' +14',
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '書類作成、お手伝いしますよ',
                    reward: [
                        stats.Knowledge + ' +5',
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ちょっとだけお傍で',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Stamina + ' +5',
                        stats.Power + ' +5',
                        stats.Guts + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Skillpoints + ' +25',
                    ],
                },
            ],
        },
    ],
    [ // 3
        {
            name: '従うのは、自分の心',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +15',
                    ],
                },
            ],
        },
        {
            name: '夕日に誓った煌めき',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +15',
                    ],
                },
            ],
        },
        {
            name: '記録に残せよ？',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +30',
                        stats.Skill.tag + '[好転一息]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '憧れのセリフ',
            choices: [
                {
                    name: '見た目をワイルドにしてみたら？',
                    reward: [
                        stats.Power + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'ワイルドなポーズをとってみたら？',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '大通りの強敵',
            choices: [
                {
                    name: '脇道を使う',
                    reward: [
                        stats.Skill.tag + '[垂れウマ回避]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '全力疾走で向かう',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 4
        {
            name: '素敵な♪練習日和',
            choices: [
                {
                    name: '誰かと走ればもっと楽しくなる',
                    reward: [
                        stats.Knowledge + ' +5',
                        stats.Skillpoints + ' +20',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '練習は真剣にすべき',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Skillpoints + ' +5',
                    ],
                },
                {
                    name: '楽しく練習するのは大切',
                    reward: [
                        stats.Trait + '[練習上手◯]',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '素敵な♪ライブ日和',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Skillpoints + ' +10',
                    ],
                },
            ],
        },
        {
            name: '素敵な♪レース日和',
            choices: [
                {
                    name: 'Losowo (1 z 2)',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Guts + ' +5',
                        stats.Knowledge + ' +10',
                        stats.Skillpoints + ' +15',
                        stats.Skill.tag + '[スピードスター]' + stats.Skill.up,
                    ],
                },
                {
                    name: 'Losowo (2 z 2)',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Guts + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Skillpoints + ' +5',
                        stats.Skill.tag + '[抜け出し準備]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'ときめきシューズ',
            choices: [
                {
                    name: '軽くて早く走れそうなシューズ',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Skillpoints + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '重いけど鍛えられそうなシューズ',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Stamina + ' +5',
                        stats.Skillpoints + ' +20',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '思い出クローバー',
            choices: [
                {
                    name: '最終コーナー',
                    reward: [
                        stats.Skill.tag + '[コーナー巧者◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'ラストの直線',
                    reward: [
                        stats.Guts + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 5
        {
            name: '私にできること',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +4',
                        stats.Skillpoints + ' +10',
                    ],
                },
            ],
        },
        {
            name: 'あこがれの……',
            choices: [
                {
                    name: 'すごくオトナっぽいよ',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Knowledge + ' +20',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'ええと……',
                    reward: [
                        stats.Knowledge + ' +5',
                        stats.Skillpoints + ' +15',
                    ],
                },
            ],
        },
        {
            name: 'きれいに咲こうねっ♪',
            choices: [
                {
                    name: '手分けして効率化をはかろう！',
                    reward: [
                        stats.Knowledge + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '急いでじょうろに水を入れてくる！',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Power + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'たいせつなのは！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Knowledge + ' +10',
                        stats.Skill.tag + '[直線巧者]' + stats.Skill.up,
                        stats.Skill.tag + '[ハヤテ一文字]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '温もり愛情弁当',
            choices: [
                {
                    name: '可愛いおかずだ',
                    reward: [
                        stats.Trait + '愛嬌◯',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '栄養ありそうだ',
                    reward: [
                        stats.Energy + ' +20',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 6
        {
            name: 'ご利用は戦略的に☆',
            choices: [
                {
                    name: 'セイウンスカイに同意する',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '誤魔化されていると伝える',
                    reward: [
                        stats.Skillpoints + ' +30',
                        stats.Knowledge + ' +10',
                        stats.Skill.tag + '[二の矢]' + stats.Skill.up,
                        stats.Relation.down,
                    ],
                },
            ],
        },
        {
            name: 'トラップにご注意',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Stamina + ' +5',
                    ],
                },
            ],
        },
        {
            name: 'すべては勝つために',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Humor.up,
                        stats.Speed + ' +5',
                        stats.Stamina + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Skillpoints + ' +5',
                        stats.Relation.up,
                        '<br />',
                        stats.Skill.tag + '[急ぎ足]' + stats.Skill.up,
                        'lub',
                        stats.Skill.tag + '[脱出術]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'ゆる募、助言者',
            choices: [
                {
                    name: '場所が悪いのかも',
                    reward: [
                        stats.Knowledge + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '釣竿の動かし方を変えたら？',
                    reward: [
                        stats.Skill.tag + '[リードキープ]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ゆる募、ネコの捕まえ方',
            choices: [
                {
                    name: '日向で待つ',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '全力で追いかける',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +15',
                        stats.Stamina + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 7
        {
            name: 'これが私のウマドル道☆',
            choices: [
                {
                    name: 'Losowo (1 z 2)',
                    reward: [
                        stats.Energy + ' +4',
                        stats.Stamina + ' +5',
                        stats.Power + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Skill.tag + '[ポジション]' + stats.Skill.up,
                    ],
                },
                {
                    name: 'Losowo (2 z 2)',
                    reward: [
                        stats.Energy + ' +4',
                        stats.Stamina + ' +5',
                        stats.Power + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Skill.tag + '[注目の踊り子]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'いつでもどこでも輝くよ☆',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Power + ' +5',
                    ],
                },
            ],
        },
        {
            name: 'かわいかったら見に来てね☆',
            choices: [
                {
                    name: '逃げる',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Power + ' +10',
                        stats.Skill.tag + '[押し切り準備]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'ダウンロードしてみる',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '常に心にステージを☆',
            choices: [
                {
                    name: '勉強も手を抜かないで',
                    reward: [
                        stats.Knowledge + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '夢に向かって頑張れ！',
                    reward: [
                        stats.Energy + ' +25',
                        stats.Skill.tag + '[集中力]' + stats.Skill.up,
                        stats.Relation.up,
                        stats.Event.fail,
                    ],
                },
            ],
        },
        {
            name: 'ライブはコーレスが命☆',
            choices: [
                {
                    name: 'ファ・ル・子～～～っ！',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'ちょっと恥ずかしい……',
                    reward: [
                        stats.Knowledge + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 8
        {
            name: '人混みは大変だ……',
            choices: [
                {
                    name: '流れに負けないよう踏ん張って進もう',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +15',
                    ],
                },
                {
                    name: '流れを見極めて進もう',
                    reward: [
                        stats.Skill.tag + '[中山レース場◯]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '本当に応えるべきは……',
            choices: [
                {
                    name: 'その時は大人を頼って',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +10',
                        stats.Skill.tag + '[スタミナキープ]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '魔法の言葉を教えよう',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Skillpoints + ' +10',
                        stats.Skill.tag + '[外差し準備]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '私が語りたいことは……',
            choices: [
                {
                    name: '今の貴方(今の君)なら大丈夫です',
                    reward: [
                        stats.Power + ' +10',
                        stats.Guts + ' +5',
                        stats.Skillpoints + ' +10',
                        stats.Skill.tag + '[豪脚]' + stats.Skill.up,
                        stats.Relation.up,
                            stats.Chance.tag,
                            stats.Power + ' +15',
                            stats.Guts + ' +10',
                            stats.Skillpoints + ' +15',
                            stats.Chance.end,
                    ],
                },
                {
                    name: '君は(貴方は)どうしたい？	',
                    reward: [
                        stats.Energy + ' +30',
                    ],
                },
            ],
        },
        {
            name: '何と答えれば……',
            choices: [
                {
                    name: 'トレーニングを実践してみせたら？',
                    reward: [
                        stats.Energy + ' +5',
                        stats.Power + ' +5',
                    ],
                },
                {
                    name: '苦手なら少しずつ克服してみよう',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Guts + ' +15',
                    ],
                },
            ],
        },
        {
            name: 'ぬいぐるみか……',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +4',
                        stats.Power + ' +5',
                    ],
                },
            ],
        },
    ],
    [ // 9
        {
            name: '少しでも近づけるように',
            choices: [
                {
                    name: 'やっぱり髪かな？',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '寡黙なところとか？',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Skillpoints + ' +20',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'ないんじゃないかな…',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Skill.tag + '[ふり絞り]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '憧れのカタチ',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Speed + ' +5',
                        stats.Skill.tag + '[栄養補給]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '曲がり角には、気をつけます！',
            choices: [
                {
                    name: 'ここで全力を出さない方がいいぞ',
                    reward: [
                        stats.Skill.tag + '[別腹タンク]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '急いで行ってあげて',
                    reward: [
                        stats.Guts + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'あれもこれもで、悩んじゃいます！',
            choices: [
                {
                    name: '美味しいものを食べるべきだ',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '思いついたところ全部に行こう！',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Stamina + ' +15',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 10
        {
            name: '怖くないもん！',
            choices: [
                {
                    name: '2人で走ればあっという間だよ',
                    reward: [
                        stats.Speed + ' +10',
                            stats.Chance.tag,
                            stats.Energy + ' -10',
                            stats.Relation.up,
                            stats.Chance.end,
                        '<br />',
                        stats.Event.unlock,
                        'lub',
                        stats.Energy + ' ▼'
                    ],
                },
                {
                    name: 'オバケに待ち伏せされてるかも',
                    reward: [
                        stats.Energy + ' +20',
                        stats.Event.fail,
                    ],
                },
            ],
        },
        {
            name: '思い込んだら一直線！',
            choices: [
                {
                    name: 'それならスピードを優先した方がいい',
                    reward: [
                        stats.Humor.up,
                        stats.Speed + ' +20',
                    ],
                },
                {
                    name: '確かにパワーは大事！',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Power + ' +20',
                    ],
                },
            ],
        },
        {
            name: 'ターボは強いんだもん！',
            choices: [
                {
                    name: 'ターボエンジン全開だ！',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +5',
                        stats.Skill.tag + '[先駆け]' + stats.Skill.up,
                            stats.Chance.tag,
                            stats.Speed + ' +25',
                            stats.Skill.tag + '[先手必勝]' + stats.Skill.up,
                            stats.Chance.end,
                    ],
                },
                {
                    name: '息を入れて！',
                    reward: [
                        stats.Energy + ' +15',
                        stats.Skill.tag + '[展開窺い]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '捕まらないもん！',
            choices: [
                {
                    name: 'よし、行ってこい！',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +10~25',
                        stats.Skill.tag + '[先頭プライド]' + stats.Skill.up,
                        stats.Relation.up,
                        '<br />',
                        stats.Event.unlock,
                        'lub',
                        stats.Energy + ' ▼'
                    ],
                },
                {
                    name: 'ここは我慢だ',
                    reward: [
                        stats.Energy + ' +25',
                        stats.Skill.tag + '[展開窺い]' + stats.Skill.up,
                        stats.Event.fail,
                    ],
                },
            ],
        },
        {
            name: '燃えてきた！！',
            choices: [
                {
                    name: '簡単な曲でミスを減らしてみるのは？',
                    reward: [
                        stats.Energy + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '激ムズに挑戦してスコアを稼ごう！',
                    reward: [
                        stats.Skill.tag + '[先駆け]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 11
        {
            name: '想いは、ジェットコースター！',
            choices: [
                {
                    name: '世界最長ジェットコースターだね！',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +5',
                        stats.Stamina + ' +5',
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'コーヒーカップだね！',
                    reward: [
                        stats.Energy + ' +20',
                        stats.Knowledge + ' +10',
                        stats.Relation.up,
                        stats.Event.fail,
                    ],
                },
            ],
        },
        {
            name: '蹄鉄で、ステップを！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Stamina + ' +5',
                    ],
                },
            ],
        },
        {
            name: '私たちの、ビクトリースタンド！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +5',
                        stats.Stamina + ' +5',
                        stats.Guts + ' +5',
                        stats.Skill.tag + '[末脚]' + stats.Skill.up,
                            stats.Chance.tag,
                            stats.Trait + '[全身全霊]',
                            stats.Chance.end,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'あれもこれもで、悩んじゃいます！',
            choices: [
                {
                    name: '美味しいものを食べるべきだ',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '思いついたところ全部に行こう！',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Stamina + ' +15',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '曲がり角には、気をつけます！',
            choices: [
                {
                    name: 'ここで全力を出さない方がいいぞ',
                    reward: [
                        stats.Skill.tag + '[栄養補給]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '急いで行ってあげて',
                    reward: [
                        stats.Guts + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 12
        {
            name: '手紙→？',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +10',
                    ],
                },
            ],
        },
        {
            name: '手紙→皆の気持ち→？',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Power + ' +10',
                    ],
                },
            ],
        },
        {
            name: '手紙→皆の気持ち→ちゃんと待っててね',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Skill.tag + '[逃亡者]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'どこまでも',
            choices: [
                {
                    name: '構わないよ',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Stamina + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '全力で走ってみて',
                    reward: [
                        stats.Speed + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'どうすれば',
            choices: [
                {
                    name: '一緒に併走してあげるのは？',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Stamina + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '全力で走ってみて',
                    reward: [
                        stats.Speed + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'その左回りにコツが隠されてるのかも',
                    reward: [
                        stats.Skill.tag + '[左回り◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 13
        {
            name: '世界級の……！？',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Power + ' +5',
                        stats.Guts + ' +5',
                    ],
                },
            ],
        },
        {
            name: 'ダシが重要！！',
            choices: [
                {
                    name: 'ああ、持ち味だ！',
                    reward: [
                        stats.Energy + ' +30',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'いや(ううん)、調理法だ！',
                    reward: [
                        stats.Skill.tag + '[スタミナキープ]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ルチャドーラ・エル！！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Power + ' +10',
                        stats.Skill.tag + '[キラーチューン]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'シークレット・ノート',
            choices: [
                {
                    name: 'エル流パワートレメニュー',
                    reward: [
                        stats.Power + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '晴れたレースで走るコツ',
                    reward: [
                        stats.Skill.tag + '[晴れの日◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'メラメラ・ファイアー！',
            choices: [
                {
                    name: 'スタミナ定食を食べるのは？',
                    reward: [
                        stats.Stamina + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'タイヤ引きで全力ダッシュは？',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Power + ' +20',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 14
        {
            name: '牛・豚・鶏・カレー！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Power + ' +5',
                    ],
                },
            ],
        },
        {
            name: 'なけなしのレイトショー',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Power + ' +5',
                        stats.Guts + ' +5',
                    ],
                },
            ],
        },
        {
            name: '貧しさは友だ！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Power + ' +10',
                        stats.Skill.tag + '[迅速果断]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '負けられん戦い！',
            choices: [
                {
                    name: '人の流れを掴め！',
                    reward: [
                        stats.Skill.tag + '[ウマ込み冷静]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'ライバルをよく観察しよう',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'タマモ先輩の学園案内',
            choices: [
                {
                    name: '案内って、図書室とか？',
                    reward: [
                        stats.Knowledge + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '案内って、ジムとか？',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Guts + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 15
        {
            name: 'ユーザーネーム『W&T』',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Guts + ' +10',
                    ],
                },
            ],
        },
        {
            name: '全・力・競・走！！',
            choices: [
                {
                    name: '手すりショートカットだ！',
                    reward: [
                        stats.Skill.tag + '[差しコーナー◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '相手の動きを予想してみるとか',
                    reward: [
                        stats.Skillpoints + ' +30',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '全・力・筋・肉！！',
            choices: [
                {
                    name: 'わかる！とことんやりたい',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'スポーツドリンクを渡す',
                    reward: [
                        stats.Humor.up,
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '後日、全員筋肉痛！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Guts + ' +5',
                    ],
                },
            ],
        },
        {
            name: 'We are BNW！！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Guts + ' +10',
                        stats.Skill.tag + '[乗り換え上手]' + stats.Skill.up,
                    ],
                },
            ],
        },
    ],
    [ // 16
        {
            name: 'バクシンの料理！！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +10',
                    ],
                },
            ],
        },
        {
            name: 'バクシンの気持ち！！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Power + ' +5',
                    ],
                },
            ],
        },
        {
            name: '優等生の一石二鳥！！',
            choices: [
                {
                    name: '雑巾がけで、スピード強化！',
                    reward: [
                        stats.Speed + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '資料室の整理で、パワーも強化！',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Power + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '走りだすほどの！！',
            choices: [
                {
                    name: '読み終わったら借りてもいいか？',
                    reward: [
                        stats.Skill.tag + '[詰め寄り]' + stats.Skill.up,
                    ],
                },
                {
                    name: '参考に、走りを見せてもらえるか？',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +10',
                        stats.Power + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'バクシンの大成功！！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Power + ' +5',
                        stats.Skill.tag + '[スプリントターボ]' + stats.Skill.up,
                    ],
                },
            ],
        },
    ],
    [ // 17
        {
            name: '風の強い日の1ページ',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '友達と頑張った日の1ページ',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'お花屋さんでの1ページ',
            choices: [
                {
                    name: '水やり手伝おうか？',
                    reward: [
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '花の品出しをしてこようか？',
                    reward: [
                        stats.Stamina + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '曇りの日の1ページ',
            choices: [
                {
                    name: '体育館を借りて走ろう！',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Guts + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'てるてる坊主を作ろう！',
                    reward: [
                        stats.Skill.tag + '[良バ場◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '2人で頑張った日の1ページ',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -10',
                        '<br />',
                        stats.Skill.tag + '[鍛冶場のバ鹿力]' + stats.Skill.up,
                        'lub',
                        stats.Skill.tag + '[別腹タンク]' + stats.Skill.up,
                        '<br />',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 18
        {
            name: '熱血ッ！エアバスケッ！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Stamina + ' +25',
                    ],
                },
            ],
        },
        {
            name: 'リスペクトシャケッ！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Guts + ' +25',
                    ],
                },
            ],
        },
        {
            name: '強敵と書いて『とも』と読むッ！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +10',
                        stats.Skill.tag + '[曲線のソムリエ]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '冒険家ゴールドシップ',
            choices: [
                {
                    name: 'た、体力かな……？',
                    reward: [
                        stats.Stamina + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '根気強さとか……？',
                    reward: [
                        stats.Guts + ' +10',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '甦れ！ゴルシ印のソース焼きそば！',
            choices: [
                {
                    name: '……味に磨きをかけたら？',
                    reward: [
                        stats.Humor.up,
                        stats.Stamina + ' +5',
                    ],
                },
                {
                    name: '……明石焼きを売ったら？',
                    reward: [
                        stats.Skill.tag + '[阪神レース場◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 19
        {
            name: '密やかなる熱情',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ひととき、うらうらに',
            choices: [
                {
                    name: 'ちゃんと息抜きはしてるのか？',
                    reward: [
                        stats.Energy + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '無理してないか？',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Power + ' +5',
                        stats.Guts + ' +5',
                        stats.Knowledge + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '秘すれば、花なり',
            choices: [
                {
                    name: 'Losowo (1 z 2)',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +5',
                        stats.Guts + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Skill.tag + '[上昇気流]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'Losowo (2 z 2)',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +5',
                        stats.Guts + ' +10',
                        stats.Knowledge + ' +5',
                        stats.Skill.tag + '[豪脚]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '文殿、思ひ煩ふ',
            choices: [
                {
                    name: 'まずは見つけた1冊をじっくり読もう',
                    reward: [
                        stats.Knowledge + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '一緒に探そうか？',
                    reward: [
                        stats.Guts + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '昼つ方、打ち語らふ',
            choices: [
                {
                    name: '揺さぶりをかけてペースを乱すのがいい',
                    reward: [
                        stats.Skill.tag + '[先行駆け引き]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '徹底的にマークして好きに走らせない',
                    reward: [
                        stats.Skill.tag + '[徹底マーク◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 20
        {
            name: 'お姉ちゃんの瞬発力',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +5',
                        stats.Stamina + ' +5',
                        stats.Guts + ' +10',
                    ],
                },
            ],
        },
        {
            name: 'あと10分、なの！',
            choices: [
                {
                    name: '悩んだら走り込み！',
                    reward: [
                        stats.Guts + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'フォームの確認はどう？',
                    reward: [
                        stats.Knowledge + ' +15',
                        stats.Relation.up,
                        stats.Chance.tag,
                        stats.Knowledge + ' +15',
                        stats.Stamina + ' +5',
                        stats.Guts + ' +10',
                    ],
                },
            ],
        },
        {
            name: 'ハピハピなる前進',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Guts + ' +5',
                        stats.Skillpoints + ' +30',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '鬼ごっこ、なの！',
            choices: [
                {
                    name: 'ゆるっと楽しむ',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Speed + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '本気で遊ぶ！',
                    reward: [
                        stats.Skill.tag + '[急ぎ足]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '目指せ、きらめく瞬間！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Guts + ' +2',
                        stats.Knowledge + ' +5',
                        stats.Skill.tag + '[じゃじゃウマ娘]' + stats.Skill.up,
                    ],
                },
            ],
        },
    ],
    [ // 21
        {
            name: '//要検証',
            choices: [
                {
                    name: '式を組み直したらどうかと伝える',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '根気よく続ければ結果が出ると伝える',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Stamina + ' +5',
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '//絶対欲しい',
            choices: [
                {
                    name: '自分に合う手段を探してみては？',
                    reward: [
                        stats.Skill.tag + '[ペースキープ]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '自力で手に入れるべき',
                    reward: [
                        stats.Maxenergy + ' +4',
                        stats.Guts + ' +4',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'オレが最強',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Knowledge + ' +10',
                        stats.Skill.tag + '[勝利への執念]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'ノイズは不要',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Knowledge + ' +5',
                    ],
                },
            ],
        },
        {
            name: 'リアリストの情熱',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Skillpoints + ' +5',
                    ],
                },
            ],
        },
    ],
    [ // 22
        {
            name: 'Pride',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Knowledge + ' +20',
                    ],
                },
            ],
        },
        {
            name: 'Struggle',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Stamina + ' +10',
                    ],
                },
            ],
        },
        {
            name: '08:36/朝寝坊、やばっ',
            choices: [
                {
                    name: 'もうすぐ始業時間なんじゃ……',
                    reward: [
                        stats.Humor.down,
                        stats.Skillpoints + ' +45',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '焦っても仕方ないしな',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '13:12/昼休み、気合い入れなきゃ',
            choices: [
                {
                    name: 'まずは目の前のことに集中しよう',
                    reward: [
                        stats.Skillpoints + ' +30',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '栄養ドリンクいる？',
                    reward: [
                        stats.Skill.tag + '[小休憩]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'One Step',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +10',
                        stats.Skill.tag + '[彗眼]' + stats.Skill.up,
                    ],
                },
            ],
        },
    ],
    [ // 23
        {
            name: '熱い誓い！　アタシはヒーローになる！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Guts + ' +5',
                    ],
                },
            ],
        },
        {
            name: '猛特訓！　現れたキャロットマン！？',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Guts + ' +5',
                    ],
                },
            ],
        },
        {
            name: '決戦！　栄光の勝利をこの手に！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Power + ' +5',
                        stats.Guts + ' +5',
                        stats.Skill.tag + '[プランX]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'ヒーローの苦悩',
            choices: [
                {
                    name: '力は温存しとかないと',
                    reward: [
                        stats.Energy + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '今のうちに鍛えておこう',
                    reward: [
                        stats.Energy + ' +5',
                        stats.Power + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '必殺技を手に入れろ！',
            choices: [
                {
                    name: 'ストライク、カッコ良さそうだ',
                    reward: [
                        stats.Skill.tag + '[短距離直線◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '無茶はしない方がいいよ',
                    reward: [
                        stats.Energy + ' +30',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 24
        {
            name: 'うららん☆テスト勉強',
            choices: [
                {
                    name: 'リズムに合わせると覚えやすいぞ',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +5',
                    ],
                },
                {
                    name: 'ご褒美があるとやる気が出るぞ',
                    reward: [
                        stats.Humor.up,
                        stats.Knowledge + ' +5',
                    ],
                },
            ],
        },
        {
            name: 'みんなの応援で頑張る！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +15',
                        stats.Skill.tag + '[どこ吹く風]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'ぅららん☆ふくヘーダッシュ!',
            choices: [
                {
                    name: '伏兵の正しい意昧を教える',
                    reward: [
                        stats.Skill.tag + '[伏兵〇]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '休んだ方がいいと伝える',
                    reward: [
                        stats.Humor.up,
                        stats.Relation.up,
                        stats.Chance.tag,
                        stats.Knowledge + ' +5',
                        stats.Chance.end,
                    ],
                },
            ],
        },
        {
            name: 'キングちゃんと頑張る！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Humor.up,
                        stats.Energy + ' +10',
                    ],
                },
            ],
        },
        {
            name: 'ライスちゃんと頑張る！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                    ],
                },
            ],
        },
    ],
    [ // 25
        {
            name: '体重を保つ為',
            choices: [
                {
                    name: 'レースが終わるまで頑張って耐える',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Stamina + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '食べた分だけ走れば問題ない',
                    reward: [
                        stats.Maxenergy + ' +4',
                        stats.Stamina + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '高みに至る為',
            choices: [
                {
                    name: 'スタミナと根性を鍛える',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Guts + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'スタートダッシュを意識する',
                    reward: [
                        stats.Skill.tag + '[先駆け]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '“期待”は力',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +10',
                    ],
                },
            ],
        },
        {
            name: '“期待”は好意',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Humor.up,
                        stats.Stamina + ' +10',
                    ],
                },
            ],
        },
        {
            name: '“期待”に応える',
            choices: [
                {
                    name: 'Losowo (1 z 2)',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Skill.tag + '[深呼吸]' + stats.Skill.up,
                    ],
                },
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Stamina + ' +10',
                        stats.Skill.tag + '[クールダウン]' + stats.Skill.up,
                    ],
                },
            ],
        },
    ],
    [ // 26
        {
            name: '逃げられない選択？',
            choices: [
                {
                    name: '粘り強く使えるほうで！',
                    reward: [
                        stats.Energy + ' -15',
                        stats.Guts + ' +20',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'パワーに懸けるほうで！',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ポジティブな逃げ',
            choices: [
                {
                    name: 'ありがとう。でもまだ頑張りたい',
                    reward: [
                        stats.Guts + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'じゃあ、俺も逃げてみる！',
                    reward: [
                        stats.Skill.tag + '[道悪◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '振り逃げランナウェイ',
            choices: [
                {
                    name: '今日だけでも思いっきり逃げよう',
                    reward: [
                        stats.Energy + ' -15',
                        stats.Stamina + ' +10',
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'マイペースは大事かもしれない',
                    reward: [
                        stats.Energy + ' -15',
                        stats.Guts + ' +10',
                        stats.Knowledge + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ラブ逃げエスケープ',
            choices: [
                {
                    name: '愛は大事だよな！',
                    reward: [
                        stats.Energy + '+10',
                        stats.Guts + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '非日常体験で成長するのは事実かも',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Skill.tag + '[逃げのコツ]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ポジティブ逃げネバギバ！',
            choices: [
                {
                    name: 'いいコンビだな',
                    reward: [
                        stats.Energy + ' -20',
                        stats.Stamina + ' +5',
                        stats.Guts + ' +5',
                        '<br />',
                        stats.Skill.tag + '[リードキープ]' + stats.Skill.up,
                        'lub',
                        stats.Skill.tag + '[先陣の心得]' + stats.Skill.up,
                        '<br />',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '君の"逃げ"は向上心なんだな',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Skill.tag + '[一匹狼]' + stats.Skill.up,
                    ],
                },
            ],
        },
    ],
    [ // 27
        {
            name: '相手が誰でも負けないんだから！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +15',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '清掃だって負けないんだから！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Knowledge + ' +10',
                        stats.Skill.tag + '[まき直し]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '明日は私が勝つんだから！',
            choices: [
                {
                    name: 'いつもこんなに早いのか？',
                    reward: [
                        stats.Knowledge + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '2番でも充分偉いよ',
                    reward: [
                        stats.Humor.up,
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'このくらい平気なんだから！',
            choices: [
                {
                    name: 'テーピングしようか？',
                    reward: [
                        stats.Skill.tag + '[スタミナキープ]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '念のため保健室へ行っておこう！',
                    reward: [
                        stats.Energy + ' +20',
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 28
        {
            name: 'まだまだタキシング中？',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Skillpoints + ' +30',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'マヤノ的おやつ会議！',
            choices: [
                {
                    name: '新フレーバーに挑戦！',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Guts + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'テッパンが1番！',
                    reward: [
                        stats.Stamina + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'トレンドへテイクオフ♪',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +10',
                        stats.Skillpoints + ' +15',
                        stats.Skill.tag + '[集中力]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'マヤノ的ファッション会議！',
            choices: [
                {
                    name: '最新技有りコーデ！',
                    reward: [
                        stats.Skill.tag + '[直線巧者]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '動きやすい機能美コーデ！',
                    reward: [
                        stats.Stamina + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 29
        {
            name: '良き管理者たるもの',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Maxenergy + ' +4',
                        stats.Energy + ' +10',
                        stats.Humor.up,
                    ],
                },
            ],
        },
        {
            name: '良き友人たるもの',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +20',
                        stats.Skill.tag + '[末脚]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '想定外への対応',
            choices: [
                {
                    name: 'いっそ自分で作るのはどうだろう',
                    reward: [
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '取り扱ってる店を他に探すのはどうだろう',
                    reward: [
                        stats.Skill.tag + '[徹底マーク◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '想定外のお昼',
            choices: [
                {
                    name: '折角だし食べたことのないものを食べたら？',
                    reward: [
                        stats.Energy + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'なら急いでメニューを考え直すしかないな',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Guts + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 30
        {
            name: 'マーベラスにするために☆',
            choices: [
                {
                    name: '自分から全力でぶつかっていくとか…？',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '関西人みたいなノリと勢いで、とか…？',
                    reward: [
                        stats.Skill.tag + '[阪神レース場◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '世界マーベラス計画☆',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Guts + ' +5',
                        stats.Knowledge + ' +5',
                    ],
                },
            ],
        },
        {
            name: 'とってもすごいよマーベラス☆',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Guts + ' +15',
                        stats.Knowledge + ' +15',
                    ],
                },
            ],
        },
        {
            name: '問答無用のマーベラス☆',
            choices: [
                {
                    name: '最近、力が出なくて',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Speed + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'もっとやる気を出したいんだ',
                    reward: [
                        stats.Humor.up,
                        stats.Speed + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 31
        {
            name: '一流の指導',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +10',
                    ],
                },
            ],
        },
        {
            name: '助言する権利をあげる！',
            choices: [
                {
                    name: '昨今の根性論について討論する',
                    reward: [
                        stats.Guts + ' +10',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '仕掛けるタイミングについて話す',
                    reward: [
                        stats.Skill.tag + '[末脚]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '一流の相談相手',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +15',
                        stats.Skillpoints + ' +15',
                    ],
                },
            ],
        },
        {
            name: '付き合う権利をあげる！',
            choices: [
                {
                    name: 'それじゃあ併走で',
                    reward: [
                        stats.Energy + ' -20',
                        stats.Speed + ' +10',
                        stats.Power + ' +10',
                        stats.Knowledge + ' +5',
                    ],
                },
                {
                    name: 'それじゃあキングコールの練習で',
                    reward: [
                        stats.Humor.down,
                        stats.Guts + ' +25',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 32
        {
            name: '同期の桐生院トレーナー',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Humor.up,
                        stats.Skillpoints + ' +16',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'お疲れ様です！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Knowledge + ' +3',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'トレーナー心得『指導は常に改良せよ』',
            choices: [
                {
                    name: 'あまり無理はなさらずに',
                    reward: [
                        stats.Energy + ' +11',
                        stats.Skillpoints + ' +16',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '『トレーナー白書』見てみたいです',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '趣味を探して',
            choices: [
                {
                    name: 'ございます！',
                    reward: [
                        stats.Energy + ' +25',
                        stats.Humor.up,
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                        stats.Friend.unlock,
                    ],
                },
                {
                    name: '特には･･････',
                    reward: [
                        stats.Humor.down,
                        stats.Skill.tag + '[おひとり様◯]' + stats.Skill.up,
                        stats.Relation.down,
                        stats.Friend.fail,
                    ],
                },
            ],
        },
        {
            name: '身をもって学ぶべし！ (1 Wycieczka)',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +35',
                        stats.Skillpoints + ' +35',
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '公園での遊び方 (2 Wycieczka)',
            choices: [
                {
                    name: '1人でシーソーですか・・・？',
                    reward: [
                        stats.Energy + ' +35',
                        stats.Humor.up,
                        stats.Knowledge + ' +6',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '鉄棒、得意な技があったり？',
                    reward: [
                        stats.Skillpoints + ' +18~57',
                        stats.Relation.up,
                        stats.Chance.tag,
                        stats.Humor.up,
                        stats.Speed + ' +6',
                        stats.Chance.end,
                    ],
                },
            ],
        },
        {
            name: '暴走トレーニング (3 Wycieczka)',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +23',
                        stats.Humor.up,
                        stats.Skillpoints + ' +33',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '尊重という幸福（4 Wycieczka）',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Humor.up,
                        stats.Power + ' +11',
                        stats.Skillpoints + ' +50',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '夢を追い続ける限り (5 Wycieczka)',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Skillpoints + ' +16',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'Brak wyborów (Max Relacje)',
                    reward: [
                        stats.Power + ' +6',
                        stats.Guts + ' +6',
                        stats.Skillpoints + ' +56',
                        stats.Skill.tag + '[逃げけん制]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '1冊目はきっとあなたに',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +6',
                        stats.Stamina + ' +6',
                        stats.Power + ' +6',
                        stats.Guts + ' +6',
                        stats.Knowledge + ' +6',
                        stats.Skill.tag + '[追込ためらい]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '葵との絆・よき指導者たれ',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Humor.up,
                        stats.Knowledge + ' +16',
                        stats.Skillpoints + ' +16',
                        stats.Skill.tag + '[ふり絞り]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'パーティーはあの場所で',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +6',
                        stats.Stamina + ' +6',
                        stats.Power + ' +6',
                    ],
                },
            ],
        },
    ],
    [ // 33
        {
            name: 'とっておきのお友だち？',
            choices: [
                {
                    name: '野菜は食べた方がいい',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Skillpoints + ' +10',
                        stats.Skill.tag + '[ラッキーセブン]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'やりたいようにやればいい',
                    reward: [
                        stats.Humor.down,
                        stats.Skill.tag + '[おひとり様◯]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'イタズラは計画的に',
            choices: [
                {
                    name: 'フジキセキのことを想って、だよな！',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Skillpoints + ' +20',
                        stats.Skill.tag + '[冷静]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '正直に謝った方がいい',
                    reward: [
                        stats.Humor.down,
                        stats.Skill.tag + '[一匹狼]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'ミラクル☆エスケープ',
            choices: [
                {
                    name: '補習を受けよう',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Speed + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '走って逃げよう！',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +20',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ワンダフル☆ミステイク！',
            choices: [
                {
                    name: '代わりにすごい呪文を教えよう',
                    reward: [
                        stats.Energy + ' -20',
                        stats.Skillpoints + ' +40',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'もう一度スズメを探しに行こう',
                    reward: [
                        stats.Skill.tag + '[愛嬌◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 34
        {
            name: '雨のお誘い',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +15',
                        stats.Skillpoints + ' +15',
                    ],
                },
            ],
        },
        {
            name: '大雨のお誘い',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +15',
                        stats.Skill.tag + '[読解力]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '夜の独走',
            choices: [
                {
                    name: '……いつもこんなに走り込んでいるのか？',
                    reward: [
                        stats.Stamina + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '……すごい集中力だな',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Stamina + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '静けさを嗜む',
            choices: [
                {
                    name: 'リラックスタイムだったのか？',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'こんな暗い所にひとりでも、怖くないんだな',
                    reward: [
                        stats.Skill.tag + '[非根幹距離◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 35
        {
            name: 'サイボーグではありません',
            choices: [
                {
                    name: '表情筋を鍛えよう！',
                    reward: [
                        stats.Guts + ' +10',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '抑揚をつけて喋ろう！',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Skill.tag + '[コーナー回復◯]' + stats.Skill.up,
                        stats.Relation.up,
                        stats.Event.fail,
                    ],
                },
            ],
        },
        {
            name: '新たな価値観のインストール',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Power + ' +5',
                        stats.Guts + ' +5',
                        stats.Skill.tag + '[逃げ直線◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '他人に危害を及ぼしてはならない',
            choices: [
                {
                    name: 'すごく重そうだ……',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Stamina + ' +5',
                        stats.Power + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '夜だと、音が少し響くかもな',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '命令は守らなければならない',
            choices: [
                {
                    name: '開店直前から待機しておこう',
                    reward: [
                        stats.Skill.tag + '[集中力]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '昼休みになったらダッシュ！',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 36
        {
            name: 'Report『特化鍛錬による可能性』',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Knowledge + ' +5',
                        stats.Skillpoints + ' +15',
                    ],
                },
            ],
        },
        {
            name: '要検証・他者の介在による偶発性',
            choices: [
                {
                    name: '走法',
                    reward: [
                        stats.Skill.tag + '[差しのコツ◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '判断力',
                    reward: [
                        stats.Knowledge + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'Report『未定（休憩も大事）』',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Knowledge + ' +15',
                        stats.Skillpoints + ' +15',
                        stats.Skill.tag + '[逃げけん制]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '要検証・睡眠時間と作業能率',
            choices: [
                {
                    name: 'パワフルなんだな',
                    reward: [
                        stats.Power + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '難しい論文に取り組んでるんだな',
                    reward: [
                        stats.Knowledge + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 37
        {
            name: '信仰心と親切心が交わる時ーー',
            choices: [
                {
                    name: '片っ端から作業を振ってみる',
                    reward: [
                        stats.Skillpoints + ' +30',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '自分に親切してみるとかはどう？',
                    reward: [
                        stats.Energy + ' +20',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'お助けください、こっくり様！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +5',
                        stats.Humor.up,
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'お導きとお友だち',
            choices: [
                {
                    name: 'みんなを信じて！',
                    reward: [
                        stats.Skillpoints + ' +45',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '気分転換に、1度走る？',
                    reward: [
                        stats.Energy + '-20',
                        'lub',
                        stats.Energy + '-10',
                        '<br />',
                        stats.Skill.tag + '[右回り◯]' + stats.Skill.up,
                        stats.Relation.up,
                        stats.Chance.tag,
                        stats.Humor.up,
                        stats.Chance.end,
                    ],
                },
            ],
        },
        {
            name: '全力スピリチュアル',
            choices: [
                {
                    name: 'ただ急いでいるだけの気が……',
                    reward: [
                        stats.Knowledge + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'もう少し気合いも込めてみたら？',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +5',
                        stats.Stamina + ' +5',
                        stats.Power + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 38
        {
            name: 'イクノ式万全メソッド',
            choices: [
                {
                    name: '全部1人でやるの？',
                    reward: [
                        stats.Knowledge + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '随分と熱心なんだね',
                    reward: [
                        stats.Skillpoints + ' +30',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'イクノ式マネジメント論',
            choices: [
                {
                    name: '俺のスケジュールも見て欲しい',
                    reward: [
                        stats.Stamina + ' +20',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'コツとか教えて',
                    reward: [
                        stats.Skill.tag + '[トリック(後)]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'イクノ式友情メソッド',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Knowledge + ' +10',
                        stats.Skillpoints + ' +20',
                    ],
                },
            ],
        },
        {
            name: 'イクノ式サポートメソッド',
            choices: [
                {
                    name: '心肺を鍛えて逃げに特化！',
                    reward: [
                        stats.Knowledge + ' +15',
                        stats.Skill.tag + '[逃げ駆け引き]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '脚力強化の追い込みで！',
                    reward: [
                        stats.Knowledge + ' +15',
                        stats.Skill.tag + '[追込駆け引き]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 39
        {
            name: 'スライハンド',
            choices: [
                {
                    name: 'さっきこっそり入れ――',
                    reward: [
                        stats.Knowledge + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'すごいマジックパワーだ……！',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'アブラカダブラ',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Knowledge + ' +10',
                    ],
                },
            ],
        },
        {
            name: 'アウトオブディスワールド',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Knowledge + ' +10',
                        stats.Skillpoints + ' +15',
                        stats.Skill.tag + '[追込焦り]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'ミスディレクション',
            choices: [
                {
                    name: '最終コーナーのコツ',
                    reward: [
                        stats.Skill.tag + '[抜け出し準備]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '走りのテクニック',
                    reward: [
                        stats.Skillpoints + ' +30',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 40
        {
            name: 'アタシはアタシらしく',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Power + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '姉御流の解決法',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Skill.tag + '[仕掛け抜群]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'ヒシアマ姐さん奮闘記～問題児編～',
            choices: [
                {
                    name: '挟み撃ちにして捕まえよう',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'グラウンドまで誘導しよう',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +10',
                        stats.Guts + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ヒシアマ姐さん奮闘記～追い込み編～',
            choices: [
                {
                    name: '気迫でライバルを圧倒する',
                    reward: [
                        stats.Skill.tag + '[追込焦り]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '大きく外側から攻めてみる',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 41
        {
            name: '俊敏にして剛腕',
            choices: [
                {
                    name: '1人でこれを運ぶにはパワーがいるな',
                    reward: [
                        stats.Power + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'この量をさばくなら、相当急がないと……',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Stamina + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '凛と胡蝶蘭',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Power + ' +5',
                        stats.Guts + ' +5',
                    ],
                },
            ],
        },
        {
            name: '樫に咲け',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -20',
                        stats.Power + ' +5',
                        stats.Guts + ' +5',
                        stats.Skill.tag + '[直線加速]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '峻厳にして優渥',
            choices: [
                {
                    name: 'いつも厳しく接しているのか？',
                    reward: [
                        stats.Skill.tag + '[臨機応変]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'よく相手を観察しているんだな',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +10',
                    ],
                },
            ],
        },
    ],
    [ // 42
        {
            name: '幸福のヲタライフ',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Power + ' +10',
                    ],
                },
            ],
        },
        {
            name: 'ウマ娘ちゃんへの愛は永遠です！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Power + ' +10',
                        stats.Skill.tag + '[追込駆け引き]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: 'ウマ娘ちゃん欠乏症',
            choices: [
                {
                    name: '大事を取って帰ったら？',
                    reward: [
                        stats.Energy + ' +5',
                        stats.Speed + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '今からでも参加できるはず！',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Power + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'エモのためなら雨の中でも',
            choices: [
                {
                    name: '無理すると風邪ひくぞ',
                    reward: [
                        stats.Skill.tag + '[雨の日◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '真剣なんだな！',
                    reward: [
                        stats.Skill.tag + '[道悪◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 43
        {
            name: '世話焼きお姉ちゃん',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Power + ' +15',
                    ],
                },
            ],
        },
        {
            name: 'トレーニングは理論的に',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -20',
                        stats.Power + ' +5',
                        stats.Skill.tag + '[追い上げ]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '脱・無難論',
            choices: [
                {
                    name: '頭で考えるより、行動あるのみ',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Skill.tag + '[内弁慶]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'ケガをしたら元も子もない',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Stamina + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ぎりぎり様相論',
            choices: [
                {
                    name: 'ぎりぎりまでトレーニング',
                    reward: [
                        stats.Power + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '前のレースを観察する',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 44
        {
            name: '筋肉と共に明日へ！',
            choices: [
                {
                    name: '限界まで挑戦しよう！',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Power + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '目標達成おめでとう！',
                    reward: [
                        stats.Maxenergy + ' +4',
                        stats.Power + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'かっこいい理由',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '応援を受け入れる気持ち',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Power + ' +15',
                        stats.Skill.tag + '[垂れウマ回避]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'あくまで薦められただけ',
            choices: [
                {
                    name: 'ペースを考えたほうがいいよ',
                    reward: [
                        stats.Skill.tag + '[ペースキープ]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '一気読みは体力使うよ？',
                    reward: [
                        stats.Energy + ' +30',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 45
        {
            name: 'オーダートレーニング！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Humor.up,
                        stats.Power + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'イカすライブのために',
            choices: [
                {
                    name: '激しいステップを取り入れてみたら？',
                    reward: [
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'アクロバティックな動きをしてみたら？',
                    reward: [
                        stats.Energy + ' =10',
                        stats.Guts + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'ナチュラル・シチーガール',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Humor.up,
                        stats.Knowledge + ' +25',
                    ],
                },
            ],
        },
        {
            name: '"シチースポット"を目指して',
            choices: [
                {
                    name: 'この地図だと、現在地と目的地は……',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Humor.up,
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'ナビのアプリを使うといいぞ',
                    reward: [
                        stats.Skill.tag + '[コーナー加速◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 46
        {
            name: '別に、邪魔しないで',
            choices: [
                {
                    name: '選択肢なしの場合',
                    reward: [
                        stats.Skill.tag + '[追い上げ]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '遅くならないようにな',
                    reward: [
                        stats.Skill.tag + '[追い上げ]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '無理はよくない',
                    reward: [
                        stats.Skillpoints + ' +30',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '夜にこっそり……？',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Stamina + ' +5',
                    ],
                },
            ],
        },
        {
            name: 'エンジョイミュージカル！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Stamina + ' +5',
                        stats.Power + ' +5',
                        stats.Skill.tag + '[お見通し]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '別に、ほっといて',
            choices: [
                {
                    name: 'せめて応援させて！',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'でも、力になりたいんだ',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 47
        {
            name: 'にんじん……買ってくださいっ',
            choices: [
                {
                    name: 'トレセン学園に掛け合ってみよう',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '人の多いところで呼び込みをしよう',
                    reward: [
                        stats.Skill.tag + '[先行コーナー◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '私の、運勢……',
            choices: [
                {
                    name: 'このまま待てばいいと思う',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Guts + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '大声で呼びかけよう！',
                    reward: [
                        stats.Maxenergy + ' +4',
                        stats.Humor.up,
                        stats.Guts + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                        stats.Chance.tag,
                        stats.Energy + ' -10',
                        stats.Knowledge + ' +5',
                        stats.Chance.end,
                    ],
                },
            ],
        },
        {
            name: '私……改革ですっ',
            choices: [
                {
                    name: 'まずは揺るぎない自信を見習おう',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'まずはあのバイタリティを見習おう',
                    reward: [
                        stats.Guts + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '私の、欲しいもの……',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Humor.up,
                        stats.Skillpoints + ' +15',
                        stats.Skill.tag + '[抜け出し準備]' + stats.Skill.up,
                    ],
                },
            ],
        },
    ],
    [ // 48
        {
            name: '褒められたって',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Guts + ' +5',
                    ],
                },
            ],
        },
        {
            name: '見られてたって',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +20',
                        stats.Stamina + ' +15',
                        stats.Skill.tag + '[差し切り体勢]' + stats.Skill.up,
                        stats.Chance.tag,
                        stats.Energy + ' +5',
                        stats.Stamina + ' +5',
                        stats.Chance.end,
                    ],
                },
            ],
        },
        {
            name: '喜んでくれるかな……',
            choices: [
                {
                    name: '別のプレゼントを探してみたら？',
                    reward: [
                        stats.Skillpoints + ' +45',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '覚悟を決めて、突っ込もう！',
                    reward: [
                        stats.Skill.tag + '[負けん気]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'やってみてもいい',
            choices: [
                {
                    name: '体を鍛えて自信をつけよう！',
                    reward: [
                        stats.Energy + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '鏡の前で笑顔の練習！',
                    reward: [
                        stats.Humor.up,
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 49
        {
            name: '（頑張り上手の）ほどほど上手',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Guts + ' +5',
                    ],
                },
            ],
        },
        {
            name: '見えてる結果（でも！）',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Guts + ' +10',
                        stats.Skill.tag + '[別腹タンク]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '（ニャンとも）ガラじゃない',
            choices: [
                {
                    name: '癒やされることも大事だと伝える',
                    reward: [
                        stats.Energy + ' +20',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'クレバーに入店する方法を伝える',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '（美味しい）おせっかい',
            choices: [
                {
                    name: '大根おろし',
                    reward: [
                        stats.Skill.tag + '[ペースアップ]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '天ぷら祭り',
                    reward: [
                        stats.Humor.up,
                        stats.Maxenergy + ' +4',
                    ],
                },
            ],
        },
    ],
    [ // 50
        {
            name: '#bff #Party!',
            choices: [
                {
                    name: 'よろたん！ウェ～イ！',
                    reward: [
                        stats.Power + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'え、俺も！？（え、私も！？）',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '#lol #Party! #2nd',
            choices: [
                {
                    name: '逃げろ！',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Power + ' +10',
                        stats.Skill.tag + '[直滑降]' + stats.Skill.up,
                        stats.Relation.up,
                        stats.Chance.tag,
                        stats.Speed + ' +10',
                        stats.Chance.end,
                    ],
                },
                {
                    name: 'キャッチしろ！',
                    reward: [
                        stats.Energy + ' +20',
                        stats.Skill.tag + '[展開窺い]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '笑顔フォーエバー',
            choices: [
                {
                    name: 'そこは気合いでこらえて！',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Power + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '一旦気を静めよう',
                    reward: [
                        stats.Skill.tag + '[伏兵〇]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '太陽とエンカウント☆',
            choices: [
                {
                    name: '覚悟を決めて熱唱する',
                    reward: [
                        stats.Power + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '合いの手で盛り上がる',
                    reward: [
                        stats.Skill.tag + '[注目株]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 51
        {
            name: 'これも普通の努力です！',
            choices: [
                {
                    name: 'その機敏さは普通じゃないような',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '普通とは言えないパワーだ',
                    reward: [
                        stats.Power + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'これも普通のハプニング！？',
            choices: [
                {
                    name: '力強い走りだった！',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '迷いのない走りだった！',
                    reward: [
                        stats.Skill.tag + '[逃げけん制]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '求む、個性！',
            choices: [
                {
                    name: '他のウマ娘に相談するとか',
                    reward: [
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'そのままでいいと思うよ',
                    reward: [
                        stats.Energy + ' +10~30',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '目指せ、いたずらっ子！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '個性的な走り方',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Power + ' +5~10',
                        stats.Skillpoints + ' +10~15',
                        stats.Relation.up,
                        '<br />',
                        stats.Skill.tag + '[ウマ込み冷静]' + stats.Skill.up,
                        'lub',
                        stats.Skill.tag + '[どこ吹く風]' + stats.Skill.up,
                    ],
                },
            ],
        },
    ],
    [ // 52
        {
            name: 'あぁ、友情',
            choices: [
                {
                    name: 'すごく力強かったぞ',
                    reward: [
                        stats.Humor.up,
                        stats.Power + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '本番に備えるだけだな！',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'あぁ、故郷',
            choices: [
                {
                    name: '質のよいシューズがいいかも',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Power + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'トレーニング教本がよさそう',
                    reward: [
                        stats.Trait + '[練習上手◯]',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '輝き追いかけて',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Humor.up,
                        stats.Speed + ' +2',
                        stats.Power + ' +2',
                        stats.Knowledge + ' +2',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '情けは人のためならず',
            choices: [
                {
                    name: '早く治さないとな',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'この元気に負けてられないぞ！',
                    reward: [
                        stats.Speed + ' +5~10',
                        stats.Skill.tag + '[直線巧者]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '2人で行くこの花道',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Power + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 53
        {
            name: '新しいもの、大好きです！',
            choices: [
                {
                    name: 'ティーカップで飲むのか？',
                    reward: [
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'メロンソーダは初めて？',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Stamina + ' +20',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '難しいこと、大好きです！',
            choices: [
                {
                    name: 'よし、やってみよう！',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'まずは1度様子を見よう',
                    reward: [
                        stats.Skill.tag + '[逃げためらい]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '『望まれた』ウマ娘',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Stamina + ' +2',
                        stats.Guts + ' +2',
                        stats.Knowledge + ' +2',
                    ],
                },
            ],
        },
        {
            name: 'ダイヤのこだわり',
            choices: [
                {
                    name: 'なるべく大人しくしていよう……',
                    reward: [
                        stats.Knowledge + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '不幸が起こるか、確かめにいこう！',
                    reward: [
                        stats.Energy + ' +15',
                        stats.Stamina + ' +10',
                        stats.Relation.up,
                        'lub',
                        stats.Humor.up,
                        stats.Guts + ' +20',
                    ],
                },
            ],
        },
        {
            name: 'あなたにだけは絶対に',
            choices: [
                {
                    name: '消灯時間まで見守る',
                    reward: [
                        stats.Energy + ' -20',
                        stats.Stamina + ' +30',
                        stats.Skill.tag + '[鋼の意志]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'そっとこの場を立ち去る',
                    reward: [
                        stats.Energy + ' +5',
                        stats.Guts + ' +5',
                        stats.Skill.tag + '[鋼の意志]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 54
        {
            name: '（ニャンとも）ガラじゃない',
            choices: [
                {
                    name: '癒やされることも大事だと伝える',
                    reward: [
                        stats.Energy + ' +20',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'クレバーに入店する方法を伝える',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '（美味しい）おせっかい',
            choices: [
                {
                    name: '大根おろし',
                    reward: [
                        stats.Skill.tag + '[ペースアップ]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '天ぷら祭り',
                    reward: [
                        stats.Humor.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '背、追いかけて',
            choices: [
                {
                    name: 'ネイチャも若いな〜',
                    reward: [
                        stats.Energy + ' +5',
                        stats.Knowledge + ' +3',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '俺も気合入ったよ',
                    reward: [
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '背、追い風を受けて',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +5',
                        stats.Skill.tag + '[伏兵◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 55
        {
            name: 'イカすライブのために',
            choices: [
                {
                    name: '激しいステップを取り入れてみたら？',
                    reward: [
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'アクロバティックな動きをしてみたら？',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Guts + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'シチースポットを目指して',
            choices: [
                {
                    name: 'この地図だと、現在地と目的地は……',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Humor.up,
                        stats.Guts + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'ナビのアプリを使うといいぞ',
                    reward: [
                        stats.Skill.tag + '[コーナー加速◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '思い出ほわほわ、わんこそば',
            choices: [
                {
                    name: 'たとえばどんなもの？',
                    reward: [
                        stats.Humor.up,
                    ],
                },
                {
                    name: 'わんこそばが食べたくなってきたな',
                    reward: [
                        stats.Maxenergy + ' +4',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '学級委員長のすンげぇ特訓',
            choices: [
                {
                    name: 'ああ！学級委員長的な度胸を見習おう！',
                    reward: [
                        stats.Humor.up,
                        stats.Power + ' +5',
                    ],
                },
                {
                    name: 'ああ！学級委員長的な走りを見習おう！',
                    reward: [
                        stats.Power + ' +3',
                        stats.Guts + ' +3',
                        stats.Knowledge + ' +3',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'あたし、勝ちたいンです！',
            choices: [
                {
                    name: 'かっこいいところを見せよう！',
                    reward: [
                        stats.Humor.up,
                        stats.Skill.tag + '[ノンストップガール]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '特訓の成果を見せてやろう！',
                    reward: [
                        stats.Power + ' +3',
                        stats.Guts + ' +3',
                        stats.Knowledge + ' +3',
                        stats.Skill.tag + '[ノンストップガール]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [ // 56
        {
            name: '温もり愛情弁当',
            choices: [
                {
                    name: '可愛いおかずだ',
                    reward: [
                        stats.Trait + '愛嬌◯',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '栄養ありそうだ',
                    reward: [
                        stats.Energy + ' +20',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'きれいに咲こうねっ♪',
            choices: [
                {
                    name: '手分けして効率化をはかろう！',
                    reward: [
                        stats.Knowledge + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '急いでじょうろに水を入れてくる！',
                    reward: [
                        stats.Speed + ' +10',
                        stats.Power + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '休んでほしくて……！',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Humor.up,
                        stats.Speed + ' +3',
                        stats.Power + ' +3',
                        stats.Knowledge + ' +3',
                    ],
                },
            ],
        },
        {
            name: 'ありがとうを言いたくて……！',
            choices: [
                {
                    name: '花冠をあげるために頑張ったんだね',
                    reward: [
                        stats.Power + ' +5',
                        stats.Skill.tag + '[直線巧者]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '感謝の花冠っていいね',
                    reward: [
                        stats.Knowledge + ' +5',
                        stats.Skill.tag + '[直線加速]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
    ],
    [
        {
            name: '剛毅朴訥、仁に近し',
            choices: [
                {
                    name: '拳のスピードアップに集中するのは？',
                    reward: [
                        stats.Speed + ' +10',
                    ],
                },
                {
                    name: '拳のパワーアップに集中するのは？',
                    reward: [
                        stats.Humor.up,
                        stats.Power + ' +5',
                    ],
                },
            ],
        },
        {
            name: '嗚呼、守りたい……！',
            choices: [
                {
                    name: '厳しい修行中みたいな顔をしてた',
                    reward: [
                        stats.Stamina + ' +10',
                        stats.Power + ' +10',
                    ],
                },
                {
                    name: '面白い一面もあるんだな',
                    reward: [
                        stats.Skill.tag + '[中距離コーナー◯]' + stats.Skill.up,
                    ],
                },
            ],
        },
        {
            name: '電脳奥義炸裂！ヤエノ出稽古修行',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Power + ' +5',
                        stats.Skillpoints + ' +10',
                    ],
                },
            ],
        },
        {
            name: '理の食VS暴の食',
            choices: [
                {
                    name: '存分に食らい尽くせいッ！',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Skillpoints + ' +10',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'それぞれに合った量の方が……',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Knowledge + ' +10',
                        stats.Skillpoints + ' +10',
                        stats.Skill.tag + '[遊びはおしまいっ！]' + stats.Skill.up,
                        stats.Event.fail,
                    ],
                },
            ],
        },
        {
            name: 'ヤエノムテキ恋歌地獄変',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Speed + ' +5',
                        stats.Stamina + ' +0~5',
                        stats.Power + ' +0~10',
                        stats.Skill.tag + '[アガッてきた！]' + stats.Skill.up,
                    ],
                },
            ],
        },
    ],
    [
        {
            name: '全・力・競・走！！',
            choices: [
                {
                    name: '手すりショートカットだ！',
                    reward: [
                        stats.Skill.tag + '[差しコーナー◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
                {
                    name: '相手の動きを予想してみるとか',
                    reward: [
                        stats.Skillpoints + ' +30',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '全・力・筋・肉！！',
            choices: [
                {
                    name: 'わかる！とことんやりたい',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'スポーツドリンクを渡す',
                    reward: [
                        stats.Humor.up,
                        stats.Skillpoints + ' +15',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '密着！情熱ダービー特集ッ',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Power + ' +5',
                    ],
                },
            ],
        },
        {
            name: '特訓！ライバルだからッ',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -10',
                        stats.Stamina + ' +5',
                        stats.Power + ' +5',
                    ],
                },
            ],
        },
        {
            name: '挑戦！夢は叶えるものッ',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Energy + ' -30',
                        stats.Stamina + ' +5',
                        stats.Power + ' +5',
                        stats.Skill.tag + '[全身全霊]' + stats.Skill.up,
                    ],
                },
            ],
        },
    ],
    [
        {
            name: '読書家あるある',
            choices: [
                {
                    name: 'ラストのカーチェイスが凄かった',
                    reward: [
                        stats.Speed + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: '映像が綺麗だった',
                    reward: [
                        stats.Energy + ' +10',
                        stats.Power + ' +5',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '託された物語',
            choices: [
                {
                    name: '図書委員に確認するのがいいかもね',
                    reward: [
                        stats.Stamina + ' -10',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'その本、どんなストーリー？',
                    reward: [
                        stats.Skill.tag + '[中距離直線◯]' + stats.Skill.up,
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: '読書少女と魔法少女？',
            choices: [
                {
                    name: '読書で知識を深めよう',
                    reward: [
                        stats.Stamina + ' +5',
                        stats.Knowledge + ' +5',
                        stats.Relation.up,
                    ],
                },
                {
                    name: 'まずは筋力アップから！',
                    reward: [
                        stats.Energy + ' +20',
                        stats.Power + ' +10',
                        stats.Relation.up,
                    ],
                },
            ],
        },
        {
            name: 'いつか、『物語』の主役に',
            choices: [
                {
                    name: 'Brak wyborów',
                    reward: [
                        stats.Stamina + ' +10',
                        stats.Knowledge + ' +10',
                        stats.Skill.tag + '[鋭い眼光]' + stats.Skill.up,
                    ],
                },
            ],
        },
    ],
]

event_db[1337] = placeholder[0]