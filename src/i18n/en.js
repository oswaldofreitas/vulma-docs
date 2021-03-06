export default {
  basic: 'Basic',
  browser_language: 'Browser language',
  bulma_color: 'One of the Bulma colors',
  bulma_size: '"small", "medium" or "large"',
  colors: 'Colors',
  components: 'Components',
  containers: 'Containers',
  data: 'Data',
  default_value: 'Default Value',
  description: 'Description',
  events: 'Events',
  example: 'Example',
  field_label: 'Field label.',
  forms: 'Forms',
  group_property: 'Property used to group rows. Ex: "profile.brand".',
  guide: 'Guide',
  href: 'Url used to redirect.',
  i18n: 'Localized messages.',
  icon_class: 'Icon class (if using font-awesome, dont need "fa" class, just use "fa-github").',
  layout: 'Layout',
  locale: 'Locale (ISO 639-1) and region (ISO 3166-1) codes. Ex: en, pt, en-US, pt-BR.',
  methods: 'Methods',
  name: 'Name',
  open_new_tab: 'Open specified route in a new tab.',
  parameters: 'Parameters',
  placeholder: 'Placeholder.',
  possible_values: 'Possible values are:',
  properties: 'Properties',
  read_only: 'Determines if user can change value.',
  return_description: 'Return Description',
  return_type: 'Return Type',
  route: 'Route used in vue-router.',
  setup: 'Setup',
  source: 'Source',
  source_array: 'Source array: Ex: [{ key: 1, profile: { name: "Hulk" } }, { key: 2, profile: { name: "Thor" } }].',
  tags: 'Tags',
  text_property: 'Text property. Ex: "profile.name". If not specified will use value property.',
  title: 'Title',
  today: 'Today',
  trigger: 'Trigger',
  type: 'Type',
  value_property: 'Value property. Ex: "key". If not specified will return full object.',
  view_demo_in_new_tab: 'View demo in new tab',
  home_page: {
    vue_ui_components: 'Vue UI components based on Bulma'
  },
  setup_instructions: {
    prerequisites: 'Prerequisites',
    install_vuecli: 'Install vue-cli',
    create_project: 'Create project',
    using_webpack_template: 'Using webpack template',
    add_vulma_to_project: 'Add Vulma to project',
    install: 'Install',
    change_mainjs: 'Change src/main.js adding these lines:',
    temporary_step: '* this is a temporary step (just in Alpha version)',
    include_vulma_babel_loader: 'Include vulma folder in Babel loader (build/webpack.base.conf.js)',
    test_it: 'Test it...',
    done: 'Done!'
  },
  docs: {
    avatar: {
      props: {
        'size-px': 'Size in pixels. @:possible_values 16, 24, 32, 48, 64, 96, 128.',
        'format': 'Image border format. @:possible_values "circle", "rounded", "square".',
        'animate': 'Should avatar be animated on hover?'
      }
    },
    button: {
      events: {
        'click': {
          trigger: 'Button was clicked'
        }
      }
    },
    collapsible: {
      'vulma-collapsible': {
        props: {
          'expandable': 'Can multiple collapsible-item be opened at same time?'
        }
      },
      'vulma-collapsible-item': {
        props: {
          'start-opened': 'Should this collapsible-item be opened by default?'
        }
      }
    },
    datatable: {
      props: {
        'columns': 'Columns array to display.',
        'columns_prop': 'Column property. Ex: "profile.name".',
        'columns_type': 'Column type. @:possible_values String, Boolean, Number, Date.',
        'columns_decimals': 'Column decimal places (can be used when columns.type = Number).',
        'columns_wrapper': 'Wrapper function useful for unit conversion. Ex: miles => miles * 1.60934 (converting to km).',
        'columns_label': 'Column label. When not specified will use column property name.',
        'columns_fixedLeft': 'Should column be fixed left?',
        'columns_fixedRight': 'Should column be fixed right?',
        'columns_textAlign': 'Default value depends on column type (String: "left", Boolean/Date: "center", Number: "right").',
        'columns_sort': 'Can column be sorted?',
        'columns_defaultSort': 'Should column be sorted by default?',
        'columns_filter': 'Can column be filtered?',
        'columns_group': 'As rows can be grouped by multiple columns, specify a number (1-based) as group order.',
        'columns_slot': 'Slot name to use in custom template. When not specified, will use column property name. Ex: <template slot="profile.image" scope="prop">{{prop.data}}</template>.',
        'columns-selector': 'Allow user to select which columns are visible?',
        'condensed': 'Should table be condensed?',
        'groups-expanded': 'Should groups be initially expanded?',
        'hide-group-columns': 'Should hide columns used in groups?',
        'sort': 'Enable sorting by default in all columns?',
        'search': 'Show search box?',
        'filter': 'Enable filtering by default in all columns?',
        'pagination': 'Pagination options.',
        'pagination_enabled': 'Should pagination be enabled?',
        'pagination_pageSize': 'Initial page size.',
        'pagination_pageSizes': 'Page size options available to user.',
        'pagination_canShowAll': 'Does page size options have a "Show All" option?',
        'excel': 'Allow user export table to Excel?'
      },
      events: {
        'row-click': {
          trigger: 'Row was clicked.',
          return_description: 'row object'
        }
      }
    },
    datepicker: {
      props: {
        'first-day-of-week': 'Day of week to show in the first calendar column (0 is Sunday).',
        'highlight-weekend': 'Should hightlight weekend days?',
        'min': {
          default: 'Today - 50 years',
          description: 'First selectable date.'
        },
        'max': {
          default: 'Today + 50 years',
          description: 'Last selectable date.'
        },
        'auto-select-today': 'Should select today date when click in "@:today"? When false will move calendar to current month.',
        'show-close-button': 'Show close button? When false will force user to select a date.',
        'i18n': 'Ex: { today: "@:today" }.'
      }
    },
    drawer: {
      'vulma-drawer': {
        methods: {
          'open': 'Opens Drawer',
          'close': 'Closes Drawer',
          'toggle': 'Toggle Drawer'
        }
      },
      'vulma-drawerheader': {
        props: {
          'simple': 'Should show simple header?',
          'title': 'Title (available for simple header)',
          'avatar': 'Avatar url',
          'name': 'Profile name',
          'email': 'Profile e-mail',
          'color': 'Header background color'
        }
      }
    },
    highlight: {
      props: {
        'text': 'Text where term will be highlighted.',
        'term': 'Term to highlight in text.',
        'ignore-case': 'Should ignore character case? If true, then "A" will be equal to "a".',
        'ignore-accents': 'Should ignore special characters? If true, then "ç" will be equal to "c" and "á" will be equal to "a".'
      }
    },
    input: {
      props: {
        'type': 'One of the html input types.',
        'icon-left': 'Left icon. @:icon_class',
        'icon-right': 'Right icon. @:icon_class'
      },
      events: {
        'focus': {
          trigger: 'Input received focus'
        }
      }
    },
    modal: {
      props: {
        'is-dialog': 'Is modal a dialog? This allow to specify icon and title properties.',
        'close-on-click-outside': 'Should close modal on click outside it?',
        'show-close-button': 'Should show close button?'
      }
    },
    navbar: {
      'example': {
        sidebar_example: 'For sidebar example see ',
        drawer_link: 'Drawer documentation'
      },
      'vulma-navbar': {
        props: {
          'show-menu-button': 'Show menu button?',
          'brand-name': 'Brand name.',
          'brand-logo': 'Brand logo url.',
          'show-shadow': 'Show navbar shadow?',
          'fixed': 'Should navbar be fixed on top?'
        },
        events: {
          'menu-clicked': {
            trigger: 'Menu button was clicked'
          }
        }
      },
      'vulma-navitem': {
        props: {
          'is-tab': 'Is a tab?'
        }
      }
    },
    select: {
      props: {
        'max-selected': '1 for single selection, 0 for infinite selection, >1 for limited number of selections.',
        'max-text-items': 'Text from selected items will be showed in the input box until the number of selections is less than or equal to this value, otherwise text specified in selected-text will be used.',
        'selected-text': 'Text used when more than max-text-items are selected.',
        'enable-search': 'Should allow searching in rows text?'
      }
    },
    tabs: {
      'vulma-tabs': {
        props: {
          'hide-one-tab': 'Hide tabs when just one tab exists.'
        },
        methods: {
          'selectTab': {
            description: 'Selects a specific tab.',
            parameters: 'index: Number (zero-based tab index)'
          }
        },
        events: {
          'tab-selected': {
            trigger: 'One of the tabs was selected',
            return_description: 'Tab index (zero-based)'
          }
        }
      }
    }
  }
}
