const ratingsData = [
    { srNo: 1, who: 'tourist', contests: 267, rating: 3880, country: 'Belarus' },
    { srNo: 2, who: 'jiangly', contests: 160, rating: 3669, country: 'China' },
    { srNo: 3, who: 'ecnerwala', contests: 185, rating: 3654, country: 'United States' },
    { srNo: 4, who: 'Benq', contests: 149, rating: 3627, country: 'United States' },
    { srNo: 5, who: 'orzdevinwang', contests: 65, rating: 3612, country: 'China' },
    { srNo: 6, who: 'Geothermal', contests: 85, rating: 3569, country: 'United States' },
    { srNo: 6, who: 'cnnfls_csy', contests: 57, rating: 3569, country: 'China' },
    { srNo: 8, who: 'jqdai0815', contests: 129, rating: 3532, country: 'Samoa' },
    { srNo: 9, who: 'Radewoosh', contests: 242, rating: 3522, country: 'Poland' },
    { srNo: 10, who: 'gyh20', contests: 75, rating: 3447, country: 'China' },
    { srNo: 11, who: 'gamegame', contests: 92, rating: 3437, country: 'Hong Kong' },
    { srNo: 12, who: 'Rebelz', contests: 74, rating: 3409, country: 'China' },
    { srNo: 13, who: 'ksun48', contests: 274, rating: 3406, country: 'Canada' },
    { srNo: 14, who: 'Um_nik', contests: 289, rating: 3319, country: 'United Kingdom' },
    { srNo: 15, who: 'SPetr', contests: 216, rating: 3284, country: 'Switzerland' },
    { srNo: 16, who: 'ugly2333', contests: 134, rating: 3270, country: 'China' },
    { srNo: 17, who: 'conqueror_of_tourist', contests: 81, rating: 3260, country: 'United States' },
    { srNo: 18, who: 'ChLJC00118', contests: 94, rating: 3250, country: 'China' },
    { srNo: 19, who: 'maroonrk', contests: 177, rating: 3236, country: 'Japan' },
    { srNo: 20, who: 'Ormlis', contests: 130, rating: 3227, country: 'Russia' },
    { srNo: 21, who: 'turmax', contests: 91, rating: 3210, country: 'Russia' },
    { srNo: 22, who: 'olovanov399', contests: 318, rating: 3200, country: 'Russia' },
    { srNo: 23, who: 'os.lyric', contests: 189, rating: 3196, country: 'Japan' },
    { srNo: 23, who: 'Rewinding', contests: 57, rating: 3196, country: 'China' },
    { srNo: 25, who: 'acrazy_sea', contests: 39, rating: 3146, country: 'China' },
    { srNo: 26, who: 'QAQAutoMaton', contests: 73, rating: 3143, country: 'China' },
    { srNo: 27, who: '353cerega', contests: 87, rating: 3133, country: 'Russia' },
    { srNo: 28, who: 'BurnedChicken', contests: 108, rating: 3128, country: 'Taiwan' },
    { srNo: 29, who: 'PubabaOnO', contests: 46, rating: 3127, country: 'China' },
    { srNo: 30, who: 'cmll02', contests: 42, rating: 3120, country: 'China' },
    { srNo: 31, who: 'ChinaKevin114514', contests: 78, rating: 3113, country: 'China' },
    { srNo: 32, who: 'Russiaisaf27', contests: 113, rating: 3110, country: 'Russia' },
    { srNo: 33, who: 'ChinaElegia', contests: 50, rating: 3109, country: 'China' },
    { srNo: 34, who: 'Japanmaspy', contests: 74, rating: 3099, country: 'Japan' },
    { srNo: 35, who: 'Belarus244mhq', contests: 158, rating: 3089, country: 'Belarus' },
    { srNo: 36, who: 'Japanyosupo', contests: 166, rating: 3088, country: 'Japan' },
    { srNo: 37, who: 'Japanpotato167', contests: 94, rating: 3087, country: 'Japan' },
    { srNo: 38, who: 'RussiaMaksim1744', contests: 126, rating: 3086, country: 'Russia' },
    { srNo: 39, who: 'South Koreako_osaga', contests: 151, rating: 3083, country: 'South Korea' },
    { srNo: 40, who: 'ChinaLaurie', contests: 26, rating: 3074, country: 'China' },
    { srNo: 41, who: 'Japantute7627', contests: 169, rating: 3073, country: 'Japan' },
    { srNo: 42, who: 'ChinaVivaciousAubergine', contests: 54, rating: 3061, country: 'China' },
    { srNo: 43, who: 'FastFreeTask', contests: 25, rating: 3060, country: 'Unknown' },
    { srNo: 44, who: 'GermanyEgor', contests: 294, rating: 3056, country: 'Germany' },
    { srNo: 45, who: 'ChinaAlternatingCurrent', contests: 88, rating: 3047, country: 'China' },
    { srNo: 46, who: 'South Koreamolamola.', contests: 71, rating: 3036, country: 'South Korea' },
    { srNo: 47, who: 'United StatesCrystally', contests: 31, rating: 3035, country: 'United States' },
    { srNo: 48, who: 'Japannoimi', contests: 190, rating: 3034, country: 'Japan' },
    { srNo: 49, who: 'Chinagisp_zjz', contests: 124, rating: 3033, country: 'China' },
    { srNo: 50, who: 'GermanyAmazingTalker_Frank', contests: 14, rating: 3029, country: 'Germany' },
    { srNo: 51, who: 'Hong Kongarvindf232', contests: 45, rating: 3028, country: 'Hong Kong' },
    { srNo: 52, who: 'Chinakiwihadron', contests: 13, rating: 3018, country: 'China' },
    { srNo: 53, who: 'Chinaaaaaawa', contests: 39, rating: 3011, country: 'China' },
    { srNo: 54, who: 'Hungarypeti1234', contests: 104, rating: 3006, country: 'Hungary' },
    { srNo: 55, who: 'PolandSwistakk', contests: 220, rating: 2991, country: 'Poland' },
    { srNo: 56, who: 'ChinadXqwq', contests: 74, rating: 2986, country: 'China' },
    { srNo: 57, who: 'JapanSSRS_', contests: 126, rating: 2984, country: 'Japan' },
    { srNo: 58, who: 'ChinaSSerxhs', contests: 53, rating: 2981, country: 'China' },
    { srNo: 59, who: 'Japanyuto1115', contests: 81, rating: 2980, country: 'Japan' },
    { srNo: 60, who: 'Singaporeerrorgorn', contests: 49, rating: 2974, country: 'Singapore' },
    { srNo: 61, who: 'RussiaKapt', contests: 76, rating: 2972, country: 'Russia' },
    { srNo: 61, who: 'JoesSR_', contests: 13, rating: 2972, country: 'Unknown' },
    { srNo: 63, who: 'Japanhitonanode', contests: 111, rating: 2967, country: 'Japan' },
    { srNo: 63, who: 'JapanNachia', contests: 48, rating: 2967, country: 'Japan' },
    { srNo: 65, who: 'Flamire', contests: 175, rating: 2962, country: 'Unknown' },
    { srNo: 66, who: 'Japankotatsugame', contests: 163, rating: 2961, country: 'Japan' },
    { srNo: 66, who: 'Japantatyam', contests: 111, rating: 2961, country: 'Japan' },
    { srNo: 68, who: 'bruhopen', contests: 12, rating: 2957, country: 'Unknown' },
    { srNo: 69, who: 'ChinaMagicalFlower', contests: 80, rating: 2948, country: 'China' },
    { srNo: 69, who: 'JapanForested', contests: 41, rating: 2948, country: 'Japan' },
    { srNo: 71, who: 'ChinaStarSilk', contests: 57, rating: 2947, country: 'China' },
    { srNo: 72, who: 'JapanHIR180', contests: 112, rating: 2946, country: 'Japan' },
    { srNo: 73, who: 'United StatesA_G', contests: 68, rating: 2944, country: 'United States' },
    { srNo: 74, who: 'Chinajiangbowen_', contests: 44, rating: 2942, country: 'China' },
    { srNo: 75, who: 'ChinaSugar_fan', contests: 67, rating: 2934, country: 'China' },
    { srNo: 76, who: 'Chinacat_of_Nesraychan', contests: 25, rating: 2933, country: 'China' },
    { srNo: 77, who: 'JoesSR', contests: 15, rating: 2929, country: 'Unknown' },
    { srNo: 78, who: 'ChinaAlex_Wei', contests: 119, rating: 2926, country: 'China' },
    { srNo: 79, who: 'RussiaLHiC', contests: 141, rating: 2922, country: 'Russia' },
    { srNo: 80, who: 'South Koreaainta', contests: 249, rating: 2921, country: 'South Korea' },
    { srNo: 80, who: 'JapanYamadaRyo', contests: 7, rating: 2921, country: 'Japan' },
    { srNo: 82, who: 'Russiadaubi', contests: 73, rating: 2920, country: 'Russia' },
    { srNo: 83, who: 'CanadaBalintR', contests: 52, rating: 2914, country: 'Canada' },
    { srNo: 84, who: 'Antarcticaqiuzx', contests: 64, rating: 2900, country: 'Antarctica' },
    { srNo: 85, who: 'Chinattklwxx', contests: 131, rating: 2898, country: 'China' },
    { srNo: 85, who: 'Chinacxm1024', contests: 69, rating: 2898, country: 'China' },
    { srNo: 87, who: 'United Statesneal', contests: 143, rating: 2897, country: 'United States' },
    { srNo: 87, who: 'PolandAdam_GS', contests: 69, rating: 2897, country: 'Poland' },
    { srNo: 89, who: '-Eternity-', contests: 14, rating: 2896, country: 'Unknown' },
    { srNo: 90, who: 'femboy-wannabe', contests: 7, rating: 2892, country: 'Unknown' },
    { srNo: 91, who: 'Endagorion', contests: 246, rating: 2890, country: 'Netherlands' },
    { srNo: 92, who: 'Russiabashkort', contests: 102, rating: 2887, country: 'Russia' },
    { srNo: 93, who: 'Хорватияdorijanlendvaj', contests: 172, rating: 2882, country: 'Croatia' },
    { srNo: 93, who: 'Brewess', contests: 15, rating: 2882, country: 'China' },
    { srNo: 95, who: 'Szoboszlai10', contests: 37, rating: 2877, country: 'Unknown' },
    { srNo: 96, who: 'Rubikun', contests: 168, rating: 2874, country: 'Japan' },
    { srNo: 96, who: 'Melusine', contests: 21, rating: 2874, country: 'China' },
    { srNo: 98, who: 'JCY_', contests: 17, rating: 2867, country: 'China' },
    { srNo: 99, who: 'riceshower', contests: 17, rating: 2862, country: 'China' },
    { srNo: 100, who: 'A.K.E.E.', contests: 41, rating: 2856, country: 'China' },
    { srNo: 101, who: 'PCTprobability', contests: 57, rating: 2853, country: 'Japan' },
    { srNo: 102, who: 'Tlatoani', contests: 117, rating: 2852, country: 'Mexico' },
    { srNo: 102, who: 'Little09', contests: 17, rating: 2852, country: 'China' },
    { srNo: 104, who: '275307894a', contests: 52, rating: 2847, country: 'China' },
    { srNo: 105, who: '20333333333', contests: 36, rating: 2846, country: 'China' },
    { srNo: 106, who: 'LeoPro', contests: 112, rating: 2844, country: 'Russia' },
    { srNo: 107, who: 'MAOooOAM', contests: 19, rating: 2839, country: 'China' },
    { srNo: 108, who: 'Lynkcat', contests: 19, rating: 2837, country: 'China' },
    { srNo: 109, who: 'Sana', contests: 58, rating: 2836, country: 'Unknown' },
    { srNo: 110, who: 'asdsasd', contests: 109, rating: 2835, country: 'Japan' },
    { srNo: 111, who: 'honglan0301', contests: 29, rating: 2834, country: 'China' },
    { srNo: 112, who: 'TLE', contests: 72, rating: 2833, country: 'China' },
    { srNo: 113, who: 'spaceN', contests: 18, rating: 2830, country: 'China' },
    { srNo: 114, who: 'dlalswp25', contests: 162, rating: 2828, country: 'South Korea' },
    { srNo: 114, who: 'stepanov.aa', contests: 26, rating: 2828, country: 'Russia' },
    { srNo: 116, who: 'Vietnamthenymphsofdelphi', contests: 90, rating: 2827, country: 'Vietnam' },
    { srNo: 116, who: 'Chinahzr', contests: 38, rating: 2827, country: 'China' },
    { srNo: 116, who: 'ChinaXenonKnight', contests: 16, rating: 2827, country: 'China' },
    { srNo: 119, who: 'Taiwanhank55663', contests: 256, rating: 2826, country: 'Taiwan' },
    { srNo: 119, who: 'IndonesiaPyqe', contests: 57, rating: 2826, country: 'Indonesia' },
    { srNo: 121, who: 'Licha06', contests: 20, rating: 2823, country: 'Unknown' },
    { srNo: 122, who: 'Japansansen', contests: 150, rating: 2822, country: 'Japan' },
    { srNo: 123, who: 'South KoreaKaruna', contests: 74, rating: 2821, country: 'South Korea' },
    { srNo: 124, who: 'dl720125', contests: 64, rating: 2818, country: 'China' },
];

document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('ratings-table-body');
    ratingsData.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.srNo}</td>
            <td>${player.who}</td>
            <td>${player.contests}</td>
            <td>${player.rating}</td>
            <td>${player.country}</td>
        `;
        tableBody.appendChild(row);
    });
});