import type { ExtractPublicPropTypes } from 'vue'
import { Search12Regular } from '@vicons/fluent'
import { defineComponent, h } from 'vue'
import { NCard } from '../../card'
import { NIcon } from '../../icon'
import { NInput } from '../../input'
import { NList, NListItem } from '../../list'
import { modalProps, NModal } from '../../modal'

export const searchProps = {
  ...modalProps
}

export type SearchProps = ExtractPublicPropTypes<typeof searchProps>

const Search = defineComponent({
  name: 'Search',
  props: searchProps,
  setup() {
    return {}
  },
  render() {
    return (
      <NModal {...this.$props} transformOrigin="center">
        {{
          default: () => (
            <NCard style="width: 600px">
              <NInput style="margin-bottom: 12px" size="large">
                {{
                  prefix: () => (
                    <NIcon>
                      <Search12Regular />
                    </NIcon>
                  )
                }}
              </NInput>
              <NList hoverable clickable>
                <NListItem>Hello world</NListItem>
              </NList>
            </NCard>
          )
        }}
      </NModal>
    )
  }
})
export default Search
