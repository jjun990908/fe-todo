# fe-todo

# 👩🏻‍💻 명령어 설계 및 수도 코드

## Show

```
show( all || status(todo, doing, done) || name || tag || id ){
  forEach 로 상태 개수 세기
  filter 함수로 status 별로 출력

  print ("현재상태 :  todo: ##개, doing: ##개, done: ##개")
}
```

## Add

```
add(name, tag){
  id 랜덤 생성
  name, id 중복체크 후 push

  print ("###이 1개가 추가됐습니다.(id:###)")
}
```

## Delete

```
delete( id ){
  isIn 함수로 id 존재 확인
  filter로 id가 일치하는 오브젝트를 제외한 리스트로 덮어쓰기

  print("###가  ### 목록에서 삭제되었습니다.")
}
```

## Update

```
update( id, status ){
    isIn 함수로 id 존재 확인
    forEach로 돌면서 id가 일치하는 오브젝트를 입력받은 status로 변경

    print("###가 ###으로 상태가 변경됐습니다")
}
```

# 〰️ 전체 흐름

1. 명령어 입력받기
2. $ 단위로 split후 input 배열에 저장
3. 명령에 맞는 함수 호출
4. 반복

<br/>

# 👩🏻‍💻 구현 내용

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
