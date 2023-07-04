# fe-todo

명령어

## Show

입력
(all, status(todo, doing, done), name, tag, id)

출력
(ALL) 현재상태 :
forEach 로 상태 개수 세기
(status)
filter 함수로 거르기

## Add

입력 ( name, tag)
출력 : 추가됐습니다~~ (id 값)
id 랜덤 부여  append
status: todo

## Delete

입력 ( id )
출력 삭제됐습니다~~
forEach로 돌면서 id일치하는 오브젝트 삭제  show all

## Update

입력 (id , status). 출력 변경됐습니다~~  forEach로 돌면서 id일치하는 오브젝트 업데이트
show all
if (id 일치 x ){
다시 입력
}

==================

1. 명령어 입력
2. $ 단위로 split
3. 명령에 맞는 함수 호출
4. 반복
