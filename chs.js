/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子，JAR，小蓝，好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    ": Chat with other players of this and similar games. ": "：与本游戏和类似游戏的其他玩家聊天。",
    ": Please support the author to ensure that more games can be created in the future!": "：请支持作者，保证以后能创作出更多的游戏！",
    "0 stars, button failed": "0 星，按钮失败",
    "1 import for as much gold as other income + 20 with 2s cooldown": "1 次进口，获得与其他收入一样多的黄金 + 20 次，冷却时间为 2 秒",
    "10 gold/village with 5s cooldown": "10 黄金/村庄，冷却时间 5 秒",
    "10 support for 1 leisure/s, 1 culture/s": "10 支持 消耗 1 休闲/秒，1 文化/秒",
    "120 faith, 3 leisure/s, 2 knowledge/s for 15 faith/s, 15 culture/s with 3s cooldown": "120 信仰，3 休闲/秒，2 知识/秒，15 信仰/秒，15 文化/秒，冷却时间 3 秒",
    "150 knowledge, 2 leisure/s, 3 faith/s for 10 knowledge/s, 12 culture/s with 3s cooldown": "150 知识，2 休闲/秒，3 信仰/秒，10 知识/秒，12 文化/秒，冷却时间 3 秒",
    "20 support for 2 faith/s, 3 culture/s": "20 支持 消耗 2 信仰/秒，3 文化/秒",
    "20 textiles, 20 medicine, 5 gold for 120 metal": "20 纺织品，20 药物，5 金换 120 金属",
    "30 support for 3 knowledge/s, 2 culture/s": "30 支持 消耗 3 知识/秒，2 文化/秒",
    "40 metal, 30 textiles, 5 gold for 150 medicine": "40 个金属，30 纺织品，5 黄金可换取 150 药品",
    "5 metal, 10 medicine, 5 gold for 100 textiles": "5 金属，10 药物，5 金 100 纺织品",
    "50 City Buildings. Lower numbers but ultimately more productive.": "50 座城市建筑。 数量较少，但最终生产力更高。",
    "50 Support. Supporting cities is even more valuable than supporting villages.": "50 支持。 支持城市比支持乡村更有价值。",
    "80 leisure, 1 knowledge/s, 1 faith/s for 5 leisure/s, 7 culture/s with 3s cooldown": "80 休闲，1 知识/秒，1 信仰/秒，5 休闲/秒，7 文化/秒，冷却时间 3 秒",
    "Activate 2nd Knowledge upgrade. Requires 2nd city and 2 universities to unlock.": "激活第二次知识升级。 需要第二座城市和两所大学才能解锁。",
    "Anthony Toney": "Anthony Toney",
    "Back to Title": "返回首页",
    "Barely Exploitative": "勉强剥削",
    "Breaking Ground": "破土动工",
    "Build 3k housing. You're around the second town now, right?": "建造3k住房。 你现在在第二个城镇附近，对吗？",
    "Build 5 housing total. Housing is essential": "总共建造5栋房屋。 住房是必不可少的",
    "Build a Community Center, unlock the next village and town.": "建造一个社区中心，解锁下一个村庄和城镇。",
    "Build Bar": "建造酒吧",
    "Build Church": "建造教堂",
    "Build Library": "建造图书馆",
    "Build Town Hall. Then set up for next Village AND Town (get gold income)": "建造市政厅。 然后设置下一个村庄和城镇（获得黄金收入）",
    "Collect 100 gold in taxes. Taxes are a fail-safe, sell imports and products for faster gains.": "收取 100 黄金的税款。 税收是一种万无一失的措施，出售进口产品和产品以获得更快的收益。",
    "Complete the game": "完成游戏",
    "Credits/Reset": "鸣谢/重置",
    "Cut some Stone": "切一些石头",
    "Discord": "Discord",
    "Endorse Priest": "支持牧师",
    "Endorse School Principal": "认可学校校长",
    "Endorse Union Rep": "支持工会代表",
    "Family Size": "家庭规模",
    "Find out what you have to work with, 5s cooldown": "找出你必须处理的事情，5秒冷却时间",
    "For Distribution": "用于分销",
    "Game by Kygron": "游戏由 Kygron 制作",
    "Game by Kygron [": "Kygron 的游戏 [",
    "Game not loading?? Please try another browser! This game requires webassembly, which is somewhat new and may conflict with adblockers or privacy settings. But this is rare.": "游戏加载不出来？？ 请尝试其他浏览器！ 该游戏需要 WebAssembly，这有点新，可能与广告拦截器或隐私设置冲突。 但这种情况很少见。",
    "Get you hands dirty": "弄脏你的手",
    "Hard Reset": "硬重置",
    "House the County": "安置县",
    "itch.io": "itch.io",
    "Itch.io": "Itch.io",
    "newgrounds": "新场地",
    "Newgrounds": "新场地",
    "OK": "好的",
    "On the shoulders of giants": "站在巨人的肩膀上",
    "Over-Serviced": "过度服务",
    "Patreon": "Patreon",
    "Please join in thanking the following people for supporting this game in development!": "请一起感谢以下人员对本游戏开发的支持！",
    "Prestige": "声望",
    "Preview New Village": "预览新村",
    "Procure 10,000 medicine total. Easy AND Valuable!": "总共采购10,000份药品。 简单又有价值！",
    "Produce 100 exports total. It's not worth it. Do it after the first town.": "总共生产100个出口。 这不值得。 在第一个城镇之后进行。",
    "Retire. Three cities and you're done!": "退休吧。 三个城市，你就完成了！",
    "Sell Imports": "销售进口产品",
    "Smart Tech": "智能科技",
    "Start anytime": "随时开始",
    "Still Barely Exploitative": "仍处于勉强剥削状态",
    "Survey Land": "测量土地",
    "Survey the first village. Sometimes you have to try again and wait for the unlock": "调查第一个村庄。 有时需要重试并等待解锁",
    "Tax villages": "税收村",
    "Thanks to all the players for trying out the game! Please share with your friends!": "感谢所有玩家尝试游戏！ 请与您的朋友分享！",
    "This starts the game over from the beginning, removes all progress and achievements. Only use it if the game is corrupted or you want a fresh start.": "这将从头开始游戏，删除所有进度和成就。 仅当游戏已损坏或您想要重新开始时才使用它。",
    "Town can be a bit grindy, it's OK to idle.": "小镇可能有点忙碌，闲着也没关系。",
    "Trade": "贸易",
    "twitter": "Twitter",
    "Twitter": "Twitter",
    "Village Complete": "村庄完成",
    "wait": "等待",
    "Wait": "等待",
    "You set off to start a new village...": "你出发去建造一个新村庄......",
    "You're a Pioneer": "你是先驱者",
    "1% of food from last project, 50% support income": "上一个项目的 1% 食物，50% 支持收入",
    "1% of stone from last project, 50% support income": "上一个项目的 1% 石头，50% 的支持收入",
    "1% of wood from last project, 50% support income": "上一个项目的 1% 木头，50% 支持收入",
    "20% of village services from last project": "上一个项目的 20% 村庄服务",
    "5% of population from last project": "上一个项目人口的 5%",
    "Food": "食物",
    "Population": "人口",
    "Services": "服务",
    "Start Now": "现在开始",
    "Start the game!": "开始游戏！",
    "Stone": "石头",
    "Wood": "木头",
    "Exports": "出口",
    "Housing": "住房",
    "Return to Village": "返回村庄",
    "gain 1 food": "获得 1 食物",
    "gain 1 stone": "获得 1 石头",
    "gain 1 wood": "获得 1 木头",
    "Chop Tree": "砍树",
    "5 wood for stone": "5 木头换石头",
    "Clear Outcropping": "清理露出的石头",
    "Clear Farm Space": "清理农场空间",
    "Cut Stone": "切割石头",
    "Gift to locals": "送给当地人的礼物",
    "half your food for 2 population": "2个人的一半食物",
    "Work Farm": "农场工作",
    "/s": "/秒",
    "End the introduction, free your options": "介绍结束，你可以自由选择",
    "0.5 food/s, 1 housing for 1 population with 1s cooldown": "0.5 食物/秒，1 人口 1 个住房，冷却时间 1 秒",
    "Get to work": "开始工作",
    "Leave Village": "离开村庄",
    "Recruit pioneer": "招募先驱者",
    "Build House": "建造房屋",
    "Train Farmer": "训练农民",
    "Train Lumberjack": "训练伐木工",
    "Train Stonecutter": "训练切石工",
    "Train Recruiter": "训练招聘人员",
    "2 wood/s, 2 stone/s 2 food/s, 10 housing, 1 population for 0.1 population/s with 5s cooldown": "消耗 2 木头/秒，2 石头/秒 2 食物/秒，10 房屋，1 人口，产生 0.1 人口/秒，冷却时间 5 秒",
    "Common training hold-to-click": "普通训练长按自动点击",
    "3k wood, 1k food, 3 population for 1 service": "3k 木头，1k 食物，3 人 获得 1 服务",
    "1k food, 5k stone, 4 population for 1 service": "1k 食物，5k 石头，4 人 获得 1 服务",
    "Train Stonecrafter": "训练木匠",
    "Train Woodcrafter": "训练切石工",
    "Train Distributer": "训练分销商",
    "2k stone, 1k wood, 3k food, 2 population for 1 service": "2k 石头，1k 木头，3k 食物，2人 获得 1 服务",
    "Build Community Center": "建造社区中心",
    "30 wood/s, 30 stone/s, 30 food/s, 50 housing, 10 services for 0.01 wood/s/s, 0.01 stone/s/s, 0.01 food/s/s with 10s cooldown": "30 木头/秒，30 石头/秒，30 食物/秒，50 住房，10 服务，0.01 木头/秒/秒，0.01 石头/秒/秒，0.01 食物/秒/秒，冷却时间 10 秒",
    "2k food, 12 stone/s, 0.1 population/s for 1 export": "2k 食物，12 石头/秒，0.1 人口/秒 获得 1 出口",
    "5k food, 30 wood/s, 0.2 population/s for 3 exports": "5k 食物，30 木材/秒，0.2 人口/秒，获得 3 出口",
    "5k wood, 5k stone, 50 food/s, 0.3 population/s for 7 exports": "5k 木材，5k 石头，50 食物/秒，0.3 人口/秒（7 出口）",
    "Build Carpentry": "建造木工",
    "Build Farm": "建造农场",
    "Build Masonry": "建造砌体",
    "Community Center": "社区中心",
    "Preview New Town": "预览新城",
    "Start after a few villages": "经过几个村庄后开始",
    "(Village Exports)": "（村庄出口）",
    "5% income from prior towns": "5%来自先前城镇的收入",
    "All exports since last town": "自上一个城镇以来的所有出口",
    "All villages since last town": "自上一个城镇以来的所有村庄",
    "Gold": "黄金",
    "Medicine": "药品",
    "Metal": "金属",
    "Needs 3+ villages, 50+ exports, and community center": "需要 3 个以上村庄、50 个以上出口和社区中心",
    "Support": "支持",
    "Textiles": "纺织品",
    "Village Specialization": "村庄专业化",
    "Villages": "村庄",
    "10 preview population, and build the community center": "10预览人口，并建设社区中心",
    "1 service/village for their use": "1 个服务/村庄供其使用",
    "10 gold for 100 medicine": "10 黄金 换 100 药",
    "10 gold for 100 metal": "10 黄金 换 100 金属",
    "10 gold for 100 textiles": "10 黄金 换 100 纺织品",
    "100 medicine for 10 gold with 1s cooldown": "100 药品 换 10 黄金，冷却时间 1 秒",
    "100 metal for 10 gold with 1s cooldown": "100 金属 换 10 黄金，冷却时间为 1 秒",
    "100 textiles for 10 gold with 1s cooldown": "100 纺织品 换 10 黄金，冷却时间 1 秒",
    "Buy Medicine": "购买药品",
    "Buy Metal": "购买金属",
    "Buy Textiles": "购买纺织品",
    "Imports": "进口",
    "Incorporate Villages": "合并村庄",
    "Leave Town": "离开城镇",
    "Return to Town": "返回城镇",
    "Sell Medicine": "出售药品",
    "Sell Metal": "出售金属",
    "Sell Textiles": "出售纺织品",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13，Coin: 14，Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"黄金: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin，14 Coin，15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 黄金"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^(.+)万$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^(.+) food, (.+) stone, (.+) population for (.+) wood\/s$/, '$1 食物，$2 石头，$3 人口，生产 $4 木头\/秒'],
    [/^(.+) food, (.+) wood, (.+) population for (.+) stone\/s$/, '$1 食物，$2 木头，$3 人口，生产 $4 石头\/秒'],
    [/^(.+) wood, (.+) stone, (.+) population for (.+) food\/s$/, '$1 木头，$2 石头，$3 人口，生产 $4 食物\/秒'],
    [/^(.+) food, (.+) stone for (.+) housing$/, '$1 食物，$2 石头用于 $3 住房'],
    [/^(.+) food, (.+) wood for (.+) housing$/, '$1 食物，$2 木头用于 $3 住房'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) stone$/, '$1 石头'],
    [/^costs ([\d\.,]+) population$/, '花费 $1 人口'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);