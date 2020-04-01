import Actions from "../"

export const fetch = () => {
  return (dispatch) => {
    return client.fetchResources().then(({ data }) => {
      const {
        items,
        optionalItems,
        categories,
        questions,
        wedding,
        decisions,
        member
      } = data

      dispatch(Actions.items.init(items, optionalItems))
      dispatch(Actions.questions.init(questions))
      dispatch(Actions.categories.init(categories))

      dispatch(Actions.wedding.init(wedding, decisions))

      dispatch(Actions.member.init(member))
      dispatch(Actions.context.setMemberId(member.id))

      dispatch(Actions.bookings.fetch())
    })
  }
}
