# SavePenny-front -> Frontend dla aplikacji "Save a Penny"

## Opis
SavePenny-front to frontend aplikacji "Save a Penny", która pozwala użytkownikom na zapisywanie bieżących wydatków oraz wpływów na konto. Umożliwia zarządzanie wydatkami i wpływami, wyświetlanie różnych list podsumowujących wydatki i dochody, tworząc kompleksowe narzędzie do śledzenia finansów osobistych.

## Technologie
Projekt został zbudowany z wykorzystaniem:
- React
- JavaScript
- docker

## Instalacja
Aby zainstalować i uruchomić projekt, wykonaj następujące kroki:

1. **Budowanie projektu**
    ```
    npm run build
    ```

2. **Budowanie obrazu Docker**
    ```
    docker build -t frontsavepenny:latest .
    ```

3. **Uruchomienie aplikacji**
    Aplikację można uruchomić za pomocą Dockera lub wykorzystać do tego projekt backendowy, który wykorzystuje powstały obraz tej aplikacji do tworzenia jej kontenera. W taki też sposób zaleca się krozystanie z tej aplikacji, to jest poprzez uruchomienie docker compose w aplikacji backendowej, któa skupia w sobie 3 kontenery: frontend, backend oraz bazę danych
