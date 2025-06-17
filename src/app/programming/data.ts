import { Programming } from "./programming";

export const posts: Programming[] = [
  {
    id: 1,
    title: "[프로그래머스] 두 개 뽑아서 더하기 - 완전탐색",
    excerpt:
      "정수 배열 numbers가 주어졌을 때, 서로 다른 인덱스에 있는 두 개의 수를 뽑아서 더해서 만들 수 있는 모든 수를 배열에 담아 오름차순으로 정렬하여 return 하는 문제입니다.",
    content: `
## 문제 설명
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아서 더해서 만들 수 있는 모든 수를 배열에 담아 오름차순으로 정렬하여 return 하도록 solution 함수를 완성해주세요.

## 제한사항
- numbers의 길이는 2 이상 100 이하입니다.
- numbers의 모든 수는 0 이상 100 이하입니다.

## 입출력 예
| numbers | result |
|---------|--------|
| [2,1,3,4,1] | [2,3,4,5,6,7] |
| [5,0,2,7] | [2,5,7,9,12] |

## 문제 해결 과정

### 1. 문제 이해
- 배열에서 서로 다른 두 개의 수를 선택해서 더한다
- 모든 가능한 조합을 구해야 한다
- 중복을 제거하고 오름차순으로 정렬한다

### 2. 접근 방법
이중 반복문을 사용해서 모든 조합을 구하고, Set을 사용해서 중복을 제거하는 방법을 선택했습니다.

### 3. 코드 구현
\`\`\`javascript
function solution(numbers) {
    const result = new Set();
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            result.add(numbers[i] + numbers[j]);
        }
    }
    
    return [...result].sort((a, b) => a - b);
}
\`\`\`

### 4. 시간복잡도
- O(n²) : 이중 반복문
- O(klogk) : 정렬 (k는 결과 배열의 길이)

### 5. 배운 점
- Set을 활용한 중복 제거가 효과적이었습니다
- 완전탐색 문제의 기본적인 접근법을 다시 한번 확인할 수 있었습니다
      `,
    date: "2024.06.15",
    readTime: "5분",
    difficulty: "Level 1",
    platform: "프로그래머스",
    tags: ["완전탐색", "배열", "Set", "정렬"],
    image: "/api/placeholder/600/300",
  },
  {
    id: 2,
    title: "[백준] 1260번 DFS와 BFS - 그래프 탐색",
    excerpt:
      "그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하는 문제입니다. 그래프 탐색의 기본기를 다지기 좋은 문제였습니다.",
    content: `
## 문제 설명
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다.

## 입력
첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다.

## 문제 해결 과정

### 1. DFS (깊이 우선 탐색)
재귀함수나 스택을 사용해서 구현할 수 있습니다. 저는 재귀함수를 사용했습니다.

### 2. BFS (너비 우선 탐색)
큐를 사용해서 구현합니다.

### 3. 코드 구현
\`\`\`python
from collections import deque

def dfs(graph, v, visited):
    visited[v] = True
    print(v, end=' ')
    
    for i in sorted(graph[v]):
        if not visited[i]:
            dfs(graph, i, visited)

def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = True
    
    while queue:
        v = queue.popleft()
        print(v, end=' ')
        
        for i in sorted(graph[v]):
            if not visited[i]:
                queue.append(i)
                visited[i] = True

n, m, v = map(int, input().split())
graph = [[] for _ in range(n + 1)]

for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

# DFS
visited = [False] * (n + 1)
dfs(graph, v, visited)
print()

# BFS
visited = [False] * (n + 1)
bfs(graph, v, visited)
\`\`\`

### 4. 핵심 포인트
- 인접 리스트로 그래프를 표현
- 정점 번호가 작은 것부터 방문하기 위해 정렬
- DFS는 재귀, BFS는 큐 사용

### 5. 배운 점
그래프 탐색 알고리즘의 기본기를 다시 한번 점검할 수 있었고, 구현할 때 주의해야 할 점들을 파악할 수 있었습니다.
      `,
    date: "2024.06.10",
    readTime: "8분",
    difficulty: "Silver 2",
    platform: "백준",
    tags: ["DFS", "BFS", "그래프", "탐색"],
    image: "/api/placeholder/600/300",
  },
  {
    id: 3,
    title: "[LeetCode] Two Sum - 해시맵 활용",
    excerpt:
      "주어진 배열에서 두 수의 합이 target과 같은 인덱스를 찾는 문제입니다. 해시맵을 활용해서 O(n) 시간복잡도로 해결할 수 있습니다.",
    content: `
## 문제 설명
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

## 문제 해결 과정

### 1. 브루트 포스 접근법
가장 단순한 방법은 이중 반복문을 사용하는 것입니다.

\`\`\`javascript
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
\`\`\`

시간복잡도: O(n²)

### 2. 해시맵 최적화
해시맵을 사용하면 한 번의 순회로 해결할 수 있습니다.

\`\`\`javascript
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
}
\`\`\`

시간복잡도: O(n)
공간복잡도: O(n)

### 3. 핵심 아이디어
- 현재 숫자에 대해 target - 현재숫자 = 찾아야 할 숫자
- 해시맵에 이미 저장되어 있다면 답을 찾은 것
- 없다면 현재 숫자와 인덱스를 해시맵에 저장

### 4. 배운 점
해시맵을 활용하면 탐색 시간을 크게 단축할 수 있다는 것을 다시 한번 확인했습니다.
      `,
    date: "2024.06.05",
    readTime: "6분",
    difficulty: "Easy",
    platform: "LeetCode",
    tags: ["해시맵", "배열", "투포인터"],
    image: "/api/placeholder/600/300",
  },
  {
    id: 4,
    title: "[프로그래머스] 기능개발 - 스택/큐",
    excerpt:
      "각 기능의 개발속도가 다를 때, 배포는 가장 먼저 개발된 기능부터 순서대로 진행되는 문제입니다. 큐의 특성을 잘 활용할 수 있는 문제였습니다.",
    content: `
## 문제 설명
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

## 문제 해결 과정

### 1. 문제 이해
- 각 기능의 개발 진도와 속도가 주어짐
- 배포는 앞선 기능이 완성되어야 가능
- 한 번에 배포되는 기능의 개수를 구해야 함

### 2. 접근 방법
1. 각 기능이 완성되는 날짜를 계산
2. 앞선 기능보다 먼저 완성되더라도 기다려야 함
3. 같은 날 배포되는 기능들을 카운트

\`\`\`javascript
function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((progress, i) => 
        Math.ceil((100 - progress) / speeds[i])
    );
    
    let maxDay = days[0];
    let count = 1;
    
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDay) {
            count++;
        } else {
            answer.push(count);
            maxDay = days[i];
            count = 1;
        }
    }
    
    answer.push(count);
    return answer;
}
\`\`\`

### 3. 핵심 포인트
- Math.ceil을 사용해서 올림 처리
- 앞선 기능의 완성일보다 늦게 완성되면 새로운 배포
- 그렇지 않으면 같은 배포에 포함

### 4. 배운 점
큐의 FIFO 특성을 잘 이용한 문제였고, 실제 개발 상황과 비슷한 시나리오여서 이해하기 쉬웠습니다.
      `,
    date: "2024.05.28",
    readTime: "7분",
    difficulty: "Level 2",
    platform: "프로그래머스",
    tags: ["스택/큐", "구현", "시뮬레이션"],
    image: "/api/placeholder/600/300",
  },
];
