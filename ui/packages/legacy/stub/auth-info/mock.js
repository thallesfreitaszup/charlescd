const groups = [ 
  { 
    "id":"fe37268a-0fbc-4fd0-8879-b4d985b3c00c",
    "name":"Teste",
    "roles":[ 
      { 
          "id":"4bf6aa30-6f37-43b2-8b00-4313a22befd1",
          "name":"module_write",
          "description":"${role_darwin_module_write}"
      },
      { 
          "id":"717e13af-9ce5-409d-a88b-a09b1ae18c66",
          "name":"moove_read",
          "description":"${role_darwin_moove_read}"
      },
      { 
          "id":"404535ea-5edb-4f93-9c85-0517de7037bc",
          "name":"circle_read",
          "description":"${role_darwin_circle_read}"
      },
      { 
          "id":"6cb2ff30-be95-4c2d-9b21-f7e5f6e3b087",
          "name":"deploy_write",
          "description":"${role_darwin_deploy_write}"
      }
    ]
  }
]

const roles = [ 
  { 
     "id":"4bf6aa30-6f37-43b2-8b00-4313a22befd1",
     "name":"module_write",
     "description":"${role_darwin_module_write}"
  },
  { 
     "id":"5ac81d09-27cd-4dfd-8959-87c457e8ea92",
     "name":"circle_write",
     "description":"${role_darwin_circle_write}"
  },
  { 
     "id":"717e13af-9ce5-409d-a88b-a09b1ae18c66",
     "name":"moove_read",
     "description":"${role_darwin_moove_read}"
  },
  { 
     "id":"404535ea-5edb-4f93-9c85-0517de7037bc",
     "name":"circle_read",
     "description":"${role_darwin_circle_read}"
  },
  { 
     "id":"17c047bf-0b32-45d9-a6fd-da5dc8db499f",
     "name":"offline_access",
     "description":"${role_offline-access}"
  },
  { 
     "id":"6cb2ff30-be95-4c2d-9b21-f7e5f6e3b087",
     "name":"deploy_write",
     "description":"${role_darwin_deploy_write}"
  },
  { 
     "id":"9c16c374-1f87-4bb8-a277-819d98b8b594",
     "name":"module_read",
     "description":"${role_darwin_module_read}"
  },
  { 
     "id":"89efdf83-3317-48df-b4f9-de509b48ccf2",
     "name":"build_write",
     "description":"${role_darwin_build_write}"
  },
  { 
     "id":"54249341-3225-47f4-bf13-af2febea0873",
     "name":"config_read",
     "description":"${role_darwin_config_read}"
  },
  { 
     "id":"9fb74e92-cdef-478e-a85e-da9c46cfcdde",
     "name":"deploy_read",
     "description":"${role_darwin_deploy_read}"
  },
  { 
     "id":"f1683b0b-5738-4781-9888-04de15d3443a",
     "name":"config_write",
     "description":"${role_darwin_config_write}"
  },
  { 
     "id":"dd861e8b-4e3c-4ff7-a427-68ae4c89e574",
     "name":"admin",
     "description":"${role_darwin_admin}"
  },
  { 
     "id":"5fe461c4-d91c-4fa5-bd92-6382651b8180",
     "name":"uma_authorization",
     "description":"${role_uma_authorization}"
  },
  { 
     "id":"85f5a7b1-c4c9-42b7-8a38-14bf54ef8fd2",
     "name":"build_read",
     "description":"${role_darwin_build_read}"
  },
  { 
     "id":"8d80003e-0977-43fe-a335-632fa940dc49",
     "name":"moove_write",
     "description":"${role_darwin_moove_write}"
  }
]

module.exports = {
  groups,
  roles,
}
