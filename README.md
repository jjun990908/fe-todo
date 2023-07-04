# fe-todo

구현 내용

## Show

- 항목들을 보여주는 기능
  [all] : 각 status별 개수를 출력
  [status] : 해당 status의 항목들 출력

* 추가 구현 기능
  [name] : 총 리스트의 개수와 이름들 출력
  [tags] : 총 리스트의 개수와 태그들 출력
  [id] : 총 리스트의 개수와 id값 출력

## Add

- 새로운 항목을 랜덤한 id로 추가하는 기능
  [name, tag] : 입력한 name과 tag로 항목 추가

* 추가 구현 기능
  이름이 같을 경우 메시지 출력과 함께 추가 실패
  id값이 같을 경우 다시 랜덤 id값 생성

## Delete

- 특정 항목을 삭제하는 기능
  [id] : 입력받은 id 값에 대한 항목을 삭제

* 추가 구현 기능
  입력받은 id값과 일치하는 항목이 없다면 메시지 출력

## Update

- 특정 항목의 status를 변경하는 기능
  [id, status] : 입력 받은 id값에 대한 항목의 status를 변경

* 추가 구현 기능
  입력받은 id값과 일치하는 항목이 없다면 메시지 출력

## Help

- 명령어들의 종류와 요구 파라미터를 출력해주는 기능

## Exit

- 명령어 입력의 반복을 멈추는 기능

========================================================================

명령어 설계

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

==================
