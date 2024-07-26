const contests = {
    upcoming: [
        { name: 'Codeforces Round 960 (Div. 2)', date: '2024-08-01', length: '2h 30m', countdown: 'Counting...' },
        { name: 'Codeforces Round (Div. 2)', date: '2024-08-15', length: '3h 0m', countdown: 'Counting...' },
        { name: 'Codeforces Round (Div. 3)', date: '2024-09-01', length: '1h 45m', countdown: 'Counting...' },
        { name: 'Pinely Round 4 (Div. 1 + Div. 2)', date: '2024-09-10', length: '3h 30m', countdown: 'Counting...' },
        { name: 'Educational Codeforces Round 168 (Rated for Div. 2)', date: '2024-09-25', length: '2h 0m', countdown: 'Counting...' },
        { name: 'Codeforces Round (Div. 2)', date: '2024-10-05', length: '2h 30m', countdown: 'Counting...' },
        { name: 'Codeforces Round (Div. 2)', date: '2024-10-20', length: '3h 0m', countdown: 'Counting...' }
    ],
    past: [
        { name: 'Codeforces Round 959 sponsored by NEAR (Div. 1 + Div. 2)', date: '2024-06-15', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 958 (Div. 2)', date: '2024-05-10', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 957 (Div. 3)', date: '2024-04-25', length: '1h 45m', standings: 'Results' },
        { name: 'Codeforces Round #956 (Div. 2) and ByteRace 2024', date: '2024-04-05', length: '2h 30m', standings: 'Results' },
        { name: 'EPIC Institute of Technology Round Summer 2024 (Div. 1 + Div. 2)', date: '2024-03-15', length: '3h 0m', standings: 'Results' },
        { name: 'Educational Codeforces Round 167 (Rated for Div. 2)', date: '2024-03-01', length: '2h 0m', standings: 'Results' },
        { name: 'Codeforces Round 955 (Div. 2, with prizes from NEAR!)', date: '2024-02-10', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 954 (Div. 3)', date: '2024-01-20', length: '1h 45m', standings: 'Results' },
        { name: 'Codeforces Round 953 (Div. 2)', date: '2024-01-05', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 952 (Div. 4)', date: '2023-12-15', length: '2h 0m', standings: 'Results' },
        { name: 'Codeforces Global Round 26', date: '2023-12-01', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 951 (Div. 2)', date: '2023-11-15', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 950 (Div. 3)', date: '2023-11-01', length: '1h 45m', standings: 'Results' },
        { name: 'Codeforces Round 949 (Div. 2)', date: '2023-10-15', length: '2h 30m', standings: 'Results' },
        { name: 'Educational Codeforces Round 166 (Rated for Div. 2)', date: '2023-10-01', length: '2h 0m', standings: 'Results' },
        { name: 'Codeforces Round 948 (Div. 2)', date: '2023-09-15', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 947 (Div. 1 + Div. 2)', date: '2023-09-01', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 946 (Div. 3)', date: '2023-08-15', length: '1h 45m', standings: 'Results' },
        { name: 'Codeforces Round 945 (Div. 2)', date: '2023-08-01', length: '2h 30m', standings: 'Results' },
        { name: 'Kotlin Heroes: Episode 10', date: '2023-07-15', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 944 (Div. 4)', date: '2023-07-01', length: '2h 0m', standings: 'Results' },
        { name: 'Kotlin Heroes: Practice 10', date: '2023-06-15', length: '2h 30m', standings: 'Results' },
        { name: '2023 Post World Finals Online ICPC Challenge powered by Huawei', date: '2023-06-01', length: '3h 0m', standings: 'Results' },
        { name: 'Helvetic Coding Contest 2024 online mirror (teams allowed, unrated)', date: '2023-05-15', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 943 (Div. 3)', date: '2023-05-01', length: '1h 45m', standings: 'Results' },
        { name: 'Codeforces Round 942 (Div. 1)', date: '2023-04-15', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 942 (Div. 2)', date: '2023-04-01', length: '2h 30m', standings: 'Results' },
        { name: 'Educational Codeforces Round 165 (Rated for Div. 2)', date: '2023-03-15', length: '2h 0m', standings: 'Results' },
        { name: 'Codeforces Round 941 (Div. 1)', date: '2023-03-01', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 941 (Div. 2)', date: '2023-02-15', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 940 (Div. 2) and CodeCraft-23', date: '2023-02-01', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 939 (Div. 2)', date: '2023-01-15', length: '2h 30m', standings: 'Results' },
        { name: 'Educational Codeforces Round 164 (Rated for Div. 2)', date: '2023-01-01', length: '2h 0m', standings: 'Results' },
        { name: 'Codeforces Round 938 (Div. 3)', date: '2022-12-15', length: '1h 45m', standings: 'Results' },
        { name: 'Codeforces Global Round 25', date: '2022-12-01', length: '3h 0m', standings: 'Results' },
        { name: 'April Fools Day Contest 2024', date: '2022-11-15', length: '2h 30m', standings: 'Results' },
        { name: 'CodeTON Round 8 (Div. 1 + Div. 2, Rated, Prizes!)', date: '2022-11-01', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 937 (Div. 4)', date: '2022-10-15', length: '2h 0m', standings: 'Results' },
        { name: 'European Championship 2024 - Online Mirror (Unrated, ICPC Rules, Teams Preferred)', date: '2022-10-01', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 936 (Div. 2)', date: '2022-09-15', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 935 (Div. 3)', date: '2022-09-01', length: '1h 45m', standings: 'Results' },
        { name: 'Codeforces Round 934 (Div. 1)', date: '2022-08-15', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 934 (Div. 2)', date: '2022-08-01', length: '2h 30m', standings: 'Results' },
        { name: 'Educational Codeforces Round 163 (Rated for Div. 2)', date: '2022-07-15', length: '2h 0m', standings: 'Results' },
        { name: 'Codeforces Round 933 (Div. 3)', date: '2022-07-01', length: '1h 45m', standings: 'Results' },
        { name: 'XVIII Open Olympiad in Informatics - Final Stage, Day 2 (Unrated, Online Mirror, IOI rules)', date: '2022-06-15', length: '3h 0m', standings: 'Results' },
        { name: 'XVIII Open Olympiad in Informatics - Final Stage, Day 1 (Unrated, Online Mirror, IOI rules)', date: '2022-06-01', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 932 (Div. 2)', date: '2022-05-15', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 931 (Div. 2)', date: '2022-05-01', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 930 (Div. 1)', date: '2022-04-15', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 930 (Div. 2)', date: '2022-04-01', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 929 (Div. 3)', date: '2022-03-15', length: '1h 45m', standings: 'Results' },
        { name: 'Educational Codeforces Round 162 (Rated for Div. 2)', date: '2022-03-01', length: '2h 0m', standings: 'Results' },
        { name: 'Codeforces Round 928 (Div. 4)', date: '2022-02-15', length: '2h 0m', standings: 'Results' },
        { name: 'Codeforces Round 927 (Div. 3)', date: '2022-02-01', length: '1h 45m', standings: 'Results' },
        { name: 'think-cell Round 1', date: '2022-01-15', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 926 (Div. 2)', date: '2022-01-01', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 925 (Div. 3)', date: '2021-12-15', length: '1h 45m', standings: 'Results' },
        { name: 'Codeforces Round 924 (Div. 2)', date: '2021-12-01', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 923 (Div. 3)', date: '2021-11-15', length: '1h 45m', standings: 'Results' },
        { name: 'Codeforces Round 922 (Div. 2)', date: '2021-11-01', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 921 (Div. 1)', date: '2021-10-15', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 921 (Div. 2)', date: '2021-10-01', length: '2h 30m', standings: 'Results' },
        { name: 'Educational Codeforces Round 161 (Rated for Div. 2)', date: '2021-09-15', length: '2h 0m', standings: 'Results' },
        { name: 'Codeforces Round 920 (Div. 3)', date: '2021-09-01', length: '1h 45m', standings: 'Results' },
        { name: 'Codeforces Round 919 (Div. 2)', date: '2021-08-15', length: '2h 30m', standings: 'Results' },
        { name: 'Hello 2024', date: '2021-08-01', length: '2h 0m', standings: 'Results' },
        { name: 'Good Bye 2023', date: '2021-07-15', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 918 (Div. 4)', date: '2021-07-01', length: '2h 0m', standings: 'Results' },
        { name: 'Codeforces Round 917 (Div. 2)', date: '2021-06-15', length: '2h 30m', standings: 'Results' },
        { name: 'Pinely Round 3 (Div. 1 + Div. 2)', date: '2021-06-01', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 916 (Div. 3)', date: '2021-05-15', length: '1h 45m', standings: 'Results' },
        { name: 'Educational Codeforces Round 160 (Rated for Div. 2)', date: '2021-05-01', length: '2h 0m', standings: 'Results' },
        { name: 'Codeforces Round 915 (Div. 2)', date: '2021-04-15', length: '2h 30m', standings: 'Results' },
        { name: '2023-2024 ICPC, NERC, Northern Eurasia Onsite (Unrated, Online Mirror, ICPC Rules, Teams Preferred)', date: '2021-04-01', length: '3h 0m', standings: 'Results' },
        { name: 'Kotlin Heroes: Episode 9 (Unrated, T-Shirts + Prizes!)', date: '2021-03-15', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 914 (Div. 2)', date: '2021-03-01', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 913 (Div. 3)', date: '2021-02-15', length: '1h 45m', standings: 'Results' },
        { name: 'Educational Codeforces Round 159 (Rated for Div. 2)', date: '2021-02-01', length: '2h 0m', standings: 'Results' },
        { name: '2023-2024 ICPC, Asia Jakarta Regional Contest (Online Mirror, Unrated, ICPC Rules, Teams Preferred)', date: '2021-01-15', length: '3h 0m', standings: 'Results' },
        { name: 'Kotlin Heroes: Practice 9 (release 2)', date: '2021-01-01', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 912 (Div. 2)', date: '2020-12-15', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 911 (Div. 2)', date: '2020-12-01', length: '2h 30m', standings: 'Results' },
        { name: 'CodeTON Round 7 (Div. 1 + Div. 2, Rated, Prizes!)', date: '2020-11-15', length: '3h 0m', standings: 'Results' },
        { name: 'Educational Codeforces Round 158 (Rated for Div. 2)', date: '2020-11-01', length: '2h 0m', standings: 'Results' },
        { name: 'ICPC 2023 Online Challenge powered by Huawei', date: '2020-10-15', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 910 (Div. 2)', date: '2020-10-01', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 909 (Div. 3)', date: '2020-09-15', length: '1h 45m', standings: 'Results' },
        { name: 'Codeforces Round 908 (Div. 1)', date: '2020-09-01', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 908 (Div. 2)', date: '2020-08-15', length: '2h 30m', standings: 'Results' },
        { name: 'Educational Codeforces Round 157 (Rated for Div. 2)', date: '2020-08-01', length: '2h 0m', standings: 'Results' },
        { name: 'Codeforces Round 907 (Div. 2)', date: '2020-07-15', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 906 (Div. 1)', date: '2020-07-01', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 906 (Div. 2)', date: '2020-06-15', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 905 (Div. 1)', date: '2020-06-01', length: '3h 0m', standings: 'Results' },
        { name: 'Codeforces Round 905 (Div. 2)', date: '2020-05-15', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 905 (Div. 3)', date: '2020-05-01', length: '1h 45m', standings: 'Results' },
        { name: 'Codeforces Round 904 (Div. 2)', date: '2020-04-15', length: '2h 30m', standings: 'Results' },
        { name: 'Codeforces Round 903 (Div. 3)', date: '2020-04-01', length: '1h 45m', standings: 'Results' }
    ]
};

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Function to update the countdown for upcoming contests
function updateCountdowns() {
    const countdownElements = document.querySelectorAll('#upcoming-contests .countdown');
    countdownElements.forEach((element) => {
        const targetDate = new Date(element.dataset.date);
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate - now;
            if (diff <= 0) {
                clearInterval(interval);
                element.textContent = 'Started';
            } else {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }, 1000);
    });
}

// Populate the tables
function populateTables() {
    const upcomingTableBody = document.querySelector('#upcoming-contests tbody');
    const pastTableBody = document.querySelector('#past-contests tbody');

    contests.upcoming.forEach(contest => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contest.name}</td>
            <td>${formatDate(contest.date)}</td>
            <td>${contest.length}</td>
            <td class="countdown" data-date="${contest.date}">${contest.countdown}</td>
        `;
        upcomingTableBody.appendChild(row);
    });

    contests.past.forEach(contest => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contest.name}</td>
            <td>${formatDate(contest.date)}</td>
            <td>${contest.length}</td>
            <td class="final-standings">${contest.standings}</td>
        `;
        pastTableBody.appendChild(row);
    });

    updateCountdowns();
}

document.addEventListener('DOMContentLoaded', populateTables);
